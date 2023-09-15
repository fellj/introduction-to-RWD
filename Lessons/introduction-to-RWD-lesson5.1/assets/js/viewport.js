function viewportHandler()
{

    // Obtain width and height on resize event

    let width = window.innerWidth;
    let height = window.innerHeight;

    // Labels
    let widthLabel  = "Window Width: ";
    let heightLabel = "Window Height: ";


    // Put in <div> element
    document.getElementById("width").innerHTML = widthLabel + width;
    document.getElementById("height").innerHTML =  heightLabel + height;
}

window.addEventListener("resize", viewportHandler);

// Calling viewportHandler() function when resize occurs
viewportHandler();

