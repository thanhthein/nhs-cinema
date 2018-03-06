module.exports = (() => {
    uploadRoute = {}

    uploadRoute.uploadImage = (req, res) => {
        console.log(req);
        if (!req.files)
            return res.status(400).send('No files were uploaded.');

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        let sampleFile = req.files.sampleFile;

        // Use the mv() method to place the file somewhere on your server
        sampleFile.mv('./pictures/filename.jpg', function (err) {
            if (err)
                return res.status(500).send(err);
            res.send('File uploaded!');
        });
    }

    uploadRoute.uploads = (req, res) => {
        res.send({ ok: "sai nữa đi" })
    }

    return uploadRoute
})()
