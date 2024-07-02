---
title: Image Convert Page
---
body:

<hr>
<h2>Upload and display image.</h2>
<p>Show image in html using Yandex Functions + JSON + JavaScript</p>

<form id="image-convert-form">
    <input type="file" id="image_file" name="image_file" accept="image/jpeg"><br>
    <input type="checkbox" id="image_invert" name="image_invert" value="checked">
    <label for="checkbox">Invert Image!</label><br>
    <input type="submit" value="Submit">
</form>

<p>Upload a JPEG image to display.</p>
<hr>
<hr>
<p>
    Original Uploaded Image:<br>
    <img id="original-image"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q==">
</p>
<hr>
<p>
    Remotely Inverted Image:<br>
    <img id="inverted-image"
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q==">
</p>
<hr>
<p>
    EXIF Data:<br>
    <div id="exif-data"></div>
</p>

<script>
    const BLANK_IMAGE_JPEG_BASE64 = '/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigD//2Q=='

    const loadImageEncodedBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };

            fileReader.readAsDataURL(file);
        });
    };

    const setImageSourceJpegBase64OrBlank = (imageId, responseDataKey, response) => {
        const image = document.querySelector(imageId);
        let base64Data = BLANK_IMAGE_JPEG_BASE64
        if (responseDataKey in response && response[responseDataKey]) {
            image.style.width = '100%';
            image.style.height = 'auto';
            base64Data = response[responseDataKey];
        } else {
            image.style.width = '1px';
            image.style.height = '1px';
        }
        image.setAttribute('src', 'data:image/jpeg;base64,' + base64Data)
    }

    // =================================================================
    const image_convert_form = document.getElementById('image-convert-form');
    image_convert_form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(image_convert_form);
        const fileImage = formData.get('image_file');

        if (!fileImage.name) {
            console.log('Image file not selected. Please select a file to upload/convert.');
            return;
        }

        loadImageEncodedBase64(fileImage).then(result => {
            const imageEncodedBase64 = result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");

            const message = {
                'image_file': fileImage.name,
                'image_data': imageEncodedBase64,
                'image_invert': 'checked' === formData.get('image_invert')
            };

            fetch('https://functions.yandexcloud.net/d4eira11easbnld53cos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            }).then((response) => {
                return response.json()
            }).then((response) => {
                console.log(response);

                setImageSourceJpegBase64OrBlank('#original-image', 'uploaded_image_data', response);
                setImageSourceJpegBase64OrBlank('#inverted-image', 'image_changed_data', response);

                const exifDataContainer = document.querySelector('#exif-data');
                if ('uploaded_image_exif_data' in response && response['uploaded_image_exif_data']) {
                    const exifDataText = response['uploaded_image_exif_data'];
                    exifDataContainer.innerHTML = exifDataText;
                } else {
                    exifDataContainer.innerHTML = '';
                }
            }).catch((error) => {
                console.log(error);
            });

        }).catch(error => {
            console.log(error)
        });
    });
</script>