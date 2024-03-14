

const getCroppedImageUrl = (url: string) => {
    const target = "media/"
    const index = url.indexOf(target) + target.length 
    return (
        url.slice(0, index) + "crop/600/400/" + url.slice(index) 
                            //    crop/600/400/ baade media dar url oon ax gozashte mishe k ax koochiktar beshe  
    )
}
export default getCroppedImageUrl 
