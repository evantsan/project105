Webcam.set({
    width:360, height:270,img_quality:'png',png_quality:90
});
livew = document.getElementById('livew')
Webcam.attach(livew)
function capt()
{
    Webcam.snap(function(data_uri){
        document.getElementById('capvew').innerHTML = "<img id='pic' src="+data_uri+">"
    })
}
console.log("ml5 version is ",ml5.version);
classifyd = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pQ8KRMajK/model.json",modelLoaded);
function modelLoaded()
{
    console.log("Model has been loaded successfully.");
}
function ident()
{
    imge = document.getElementById('pic');
    classifyd.classify(imge,gotResult)

}
function gotResult(error,results){
    if(error)
    {
        console.error(error)
    }
    else
    {
        console.log(results)
        document.getElementById('nameds').innerHTML = results[0].label;
        document.getElementById('accu').innerHTML = results[0].confidence.toFixed(3)
    }
}