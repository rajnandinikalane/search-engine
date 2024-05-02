function loadExcel() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: 'binary' });
            // Assuming the first sheet is of interest
            const firstSheetName = workbook.SheetNames[0];
            const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheetName]);
            // Save the data in localStorage for simplicity
            localStorage.setItem('excelData', JSON.stringify(excelData));
            // Redirect to the display page
            window.location.href = 'upload_successful.html';
        };
        reader.readAsBinaryString(file);
    }
    else{
        alert('Please select correct file (exel file).');
    }
}
