const csvUrl = 'data.csv'; // CSVファイルのパス

fetch(csvUrl)
    .then(response => response.text())
    .then(csvData => {
        const rows = csvData.split('\n');
        let output = '<table border="1">';
        const headers = rows[0].split(',');
        output += '<tr>';
        headers.forEach(header => output += `<th>${header}</th>`);
        output += '</tr>';
        rows.slice(1).forEach(row => {
            const cols = row.split(',');
            output += '<tr>';
            cols.forEach(col => output += `<td>${col}</td>`);
            output += '</tr>';
        });
        output += '</table>';
        document.getElementById('output').innerHTML = output;
    })
    .catch(error => console.error('エラー:', error));
