const keywordStatements = ['if', 'else', 'switch', 'case', 'for', 'foreach', 'do', 'while', 'break', 'continue', 'return', 'throw', 'try', 'catch', 'finally'];
const keywordDeclarations = ['let', 'var', 'const', 'new', 'function', '=>', 'false', 'true', 'of'];
const keywordOperators = ['in', 'is', 'not'];
const quoteTypes = ['"', '\'', '`'];

const languages = ['html', 'css', 'javascript', 'php', 'python', 'twig'];
const languagePrefix = 'language-';
const keywordStatementsForTwig = ['include', 'set'];

const codeBlocks = document.getElementsByTagName('code');
for (const codeBlock of codeBlocks) {
    const chunks = codeBlock.textContent.split(/(\s+|\.|,|\||{|}|\[|\]|\(|\)|<\?[a-zA-Z]+|<\/?|\/?>|=+>?|\+|!|(?::|;)+\s?)/).filter(item => item !== undefined && item !== '');
    const chunkAmount = chunks.length;
    const chunkElements = [];

    const codeBlockLanguage = Array.from(codeBlock.classList).find(cssClass => languages.find(language => cssClass === languagePrefix + language))?.substring(languagePrefix.length);
    const isLanguageWithEndStatements = [undefined, 'php', 'twig'].includes(codeBlockLanguage);
    const isLanguageIncludingMarkdown = [undefined, 'markdown'].includes(codeBlockLanguage);
    const openedBrackets = [[['{', '}'], 0], [['[', ']'], 0], [['(', ')'], 0]];

    let openingQuote = '';
    let isQuoteOpen = false;
    let isMarkdownMetaDataSectionOpen = false;
    let isInsideTag = false;
    let isCssRuleOpen = false;
    for (let i = 0; i < chunkAmount; i++) {
        const chunk = chunks[i];
        const code = document.createElement('span');
        const codeStyle = code.classList;
        code.textContent = chunk;
        const chunkMatchesAny = (array, prefix = '') => array?.some(entry => prefix + entry === chunk || entry === chunk);
        const chunkMatchesNone = (array, prefix = '') => array?.every(entry => prefix + entry !== chunk || entry !== chunk);
        const chunkStartsWith = (regexAsString, indexOffset = 0) => (indexOffset > 0 ? i + indexOffset < chunkAmount : i + indexOffset >= 0) && chunks[i + indexOffset].match(new RegExp('^' + regexAsString));

        if (quoteTypes.some(quote => chunk.includes(quote))) {
            if (!isQuoteOpen) openingQuote = chunk.split('').find(character => quoteTypes.find(quote => quote === character));
            if ((chunk.match(new RegExp(openingQuote, 'g')) || []).length % 2 !== 0) {
                if (isQuoteOpen) openingQuote = '';
                isQuoteOpen = !isQuoteOpen;
            }
            codeStyle.add('string');
        }
        else if (isQuoteOpen) codeStyle.add('string');

        else if ((chunk.includes('<') && chunkStartsWith('[a-zA-Z]', 1)) || (chunk.includes('>') && chunkStartsWith('[a-zA-Z]|\\s+|' + quoteTypes.join('|'), -1))) {
            isInsideTag = chunk.includes('<');
            codeStyle.add('angle-bracket');
        }
        else if (chunk.match(/[a-zA-Z]/) && chunkStartsWith('<', -1)) codeStyle.add('tag');
        else if (isInsideTag && !chunk.startsWith('=')) codeStyle.add('attribute');

        else if (codeBlockLanguage === 'html') {}
        else if (isLanguageIncludingMarkdown && chunk === '---') isMarkdownMetaDataSectionOpen = !isMarkdownMetaDataSectionOpen;
        else if (isMarkdownMetaDataSectionOpen) {
            if (chunkStartsWith(':', 1)) codeStyle.add('meta-attribute');
            else if (!chunk.startsWith(':')) codeStyle.add('string');
        }

        else if (openedBrackets.some(bracketsAndCountEntry => chunkMatchesAny(bracketsAndCountEntry[0]))) {
            const bracketsAndCount = openedBrackets.find(bracketsAndCountEntry => chunkMatchesAny(bracketsAndCountEntry[0]));
            const isCountToBeIncremented = bracketsAndCount[0][0] === chunk;

            if (isCountToBeIncremented && bracketsAndCount[1] >= 3) bracketsAndCount[1] = 0;
            else if (!isCountToBeIncremented && bracketsAndCount[1] < 0) bracketsAndCount[1] = 3;

            codeStyle.add(`bracket-lvl-${isCountToBeIncremented ? ++bracketsAndCount[1] : bracketsAndCount[1]--}`);
        }
        else if (chunk.match(/[a-zA-Z]/) && chunkStartsWith('\\(', 1)) codeStyle.add('function');
        else if (chunk.match(/^-?\d/)) codeStyle.add('number');
        else if (codeBlockLanguage === 'css') {
            if (chunk.includes(':')) isCssRuleOpen = true;
            else if (chunk.includes(';')) isCssRuleOpen = false;
            else if (chunk.match(/[a-zA-Z]/)) {
                if (chunkStartsWith(':', 1)) codeStyle.add('property');
                else if (isCssRuleOpen) codeStyle.add('string');
                else codeStyle.add('selector');
            }
        }

        else if (chunkMatchesAny(keywordStatements, isLanguageWithEndStatements ? 'end' : '') || (isLanguageWithEndStatements && chunkMatchesAny(keywordStatementsForTwig))) codeStyle.add('keyword');
        else if (chunkMatchesAny(keywordDeclarations) || chunk.startsWith('<?') || chunk.startsWith('?>')) codeStyle.add('variable-declaration');
        else if (chunk.match(/[a-zA-Z]/) && chunkMatchesNone(keywordOperators)) codeStyle.add('variable');

        chunkElements.push(code);
    }
    codeBlock.replaceChildren(...chunkElements);
}
