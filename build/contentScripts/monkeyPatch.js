document.addEventListener('DOMContentLoaded', () => {
    const script = document.createElement('script');
    script.innerText = `
        const OriginalXMLHttpRequest = XMLHttpRequest;

        window.XMLHttpRequest = function(){
            const xhr = new OriginalXMLHttpRequest();
            xhr.onload = () => {
                if (!xhr.responseText.startsWith('{"ts')) return;
                console.log(xhr.responseText);
                const response = JSON.parse(xhr.responseText);
                response.updates.forEach((update) => {
                    if (update[0] !== 4) return;
                    console.log(update[3]);
                });
            };

            return xhr;
        };
    `;
    document.body.appendChild(script);
});