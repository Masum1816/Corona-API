const row = document.getElementById("showData");
var index = 0;

const showData = () => {

    fetch("https://data.covid19india.org/data.json").then((res) => {

        return res.json();

    }).then((data) => {

        data.statewise.forEach(data => {
            index++;

            row.innerHTML += `
                                <tr>
                                    <td class="bg-secondary-subtle font-style">${index}</td>
                                    <td class="bg-secondary-subtle font-style">${data.state}</td>
                                    <td class="bg-secondary-subtle font-style">${data.active}</td>
                                    <td class="bg-secondary-subtle font-style">${data.lastupdatedtime}</td>
                                    <td class="bg-secondary-subtle font-style">${data.confirmed}</td>
                                    <td class="bg-secondary-subtle font-style">${data.deaths}</td>
                                </tr>
                            `;
            showData.innerHTML += row;

            
        });

    }).catch((err) => {

        console.log("Err", err);

    });

};

showData();
  