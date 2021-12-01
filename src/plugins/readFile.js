export const readFile = (file) => {
    return new Promise(resolve => {
        let fileReader = new FileReader()
        // console.log(file)
        
        fileReader.onload = ev => {
            resolve(ev.target.result)
        }
        let data = file.target.files[0]
        if (data) {
            fileReader.readAsBinaryString(data)
        }
    })
}
