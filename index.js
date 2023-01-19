var container = document.getElementById("div-container");
var osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay(container);

input.addEventListener("change", () => {
    for (const file of input.files) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
             const text = e.target.result
             const parser = new DOMParser();
             const mxlDoc = parser.parseFromString(text,'text/xml');
             console.log(mxlDoc);
             var loadPromise = osmd.load(mxlDoc);
             loadPromise.then(function(){
                osmd.render();
           });
        });
        reader.readAsText(file);
    }
});
