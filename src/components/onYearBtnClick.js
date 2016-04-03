
export default function onYearBtnClick (e) {
    this.props.getPhotos(+e.target.innerText)
}