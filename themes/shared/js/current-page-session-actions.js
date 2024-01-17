const linkElements = document.getElementsByClassName('social')[0].children;
const url = location.href;
for (const linkElement of linkElements)
{
    if (url.endsWith('/')) continue;
    const itemUrl = linkElement.href;

    if (itemUrl.includes('/?')) linkElement.href = url + '&' + itemUrl.split('/?', 2)[1];
    else if (itemUrl.includes('?')) linkElement.href = url + '/?' + itemUrl.split('?', 2)[1];
}
