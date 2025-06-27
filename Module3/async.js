async function getDataAndHandle(url) {
    const response = await fetch(url);
    try {
        if (!response.ok) {
            throw new Error(`Код ошибки: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (err) {
        return `Произошла ошибка: ${err.message}`;
    }
}

(async () => {
    const output = await getDataAndHandle('https://jsonplaceholder.typicode.com/posts/1');
    console.log(output);
})();
