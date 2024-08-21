//-----------------------------------------------THE AUTHENTICATION SETUP-------------------------------------------------
const groupCredentials = {
    //INITIALLY ADDED THE USERNAME AND PASSWORDS FOR EACH GROUPS
    'Group 1': { username: '1', password: '1' },
    'Group 2': { username: '1', password: '1' },
    'Group 3': { username: '1', password: '1' },
    'Group 4': { username: '1', password: '1' }
};

//WHEN CLICK ON THE GROUP CARDS THE FUNCTION WILL INITIATE LINE 46,301,562,824
function showLoginModal(groupName, callback) {
    const modal = document.getElementById('loginModal');
    const loginForm = document.getElementById('loginForm');
    const closeBtn = document.querySelector('.close');

    // Show the modal
    modal.style.display = 'flex';

    // Close the modal when 'x' button is clicked
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Handle form submission
    loginForm.onsubmit = function (event) {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Check if the credentials match for the specific group
        const credentials = groupCredentials[groupName];

        if (credentials && credentials.username === username && credentials.password === password) {
            modal.style.display = 'none';
            callback();
            this.reset()
        } else {
            alert('Incorrect username or password for this group. Please try again.');
        }
    };
}
//-----------------------------------------------TEAM-A START---------------------------------------------------------------

function groupOne(obj) {
    showLoginModal('Group 1',() => {
        highlightButton(obj);
        let divElement1 = document.getElementById('team-a');//parentdiv of  div , which displays names of student of team 1
        let container1 = document.getElementById('content1');
        let container2 = document.getElementById('content2');
        let container3 = document.getElementById('content3');
        let container4 = document.getElementById('content4');
        container1.style.display = 'block';
        container2.style.display = 'none';
        container3.style.display = 'none';
        container4.style.display = 'none';
        //-----------------------------------------------TEAM-A AL START---------------------------------------------------------------
        let SHEET_ID_ = '1reeA0amrxSVqZyuzjE6nkIjdDuzdunhFHMXlceb8aoY';
        let SHEET_TITLE_ = 'Sheet1';
        let SHEET_RANGE_ = 'B3:BJ32';

        let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement1.appendChild(trName)

                        button.onclick = function () {

                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';

                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var al_off_start = 0;//edit here
                var al_off_end = 54;
                function dataSearch_al_on(index) {
                    let colLength_items = al_off_end
                    for (let i = al_off_start; i < colLength_items; i++) {
                        if (i >= 24 && i <= 24) {                         
                            continue;
                        }else {
                            if (data.table.rows[index].c[i].v == true) {
                                
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }

            }
            )
        //-----------------------------------------------TEAM-A AL END---------------------------------------------------------------    
        //-----------------------------------------------TEAM-A TH START---------------------------------------------------------------    
        SHEET_ID_ = '1reeA0amrxSVqZyuzjE6nkIjdDuzdunhFHMXlceb8aoY';
        SHEET_TITLE_ = 'Sheet1';
        SHEET_RANGE_ = 'B35:BJ47';

        FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;//parent div containin the card div
                console.log('find rows', data)
                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement1.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);

                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var th_off_start = 0;//edit here
                var th_off_end = 44;
                function dataSearch_al_on(index) {
                    let colLength_items = th_off_end;
                    for (let i = th_off_start; i < colLength_items; i++) {
                        if (i >= 20 && i <= 24 ) {//add
    
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                                
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
    })
}
//-----------------------------------------------TEAM-A TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-A END---------------------------------------------------------------

//-----------------------------------------------TEAM-B START---------------------------------------------------------------

function groupTwo(obj) {
    showLoginModal('Group 2',() => {
        highlightButton(obj);
        let divElement2 = document.getElementById('team-b');//parentdiv of  div , which displays names of student of team 2
        let container1 = document.getElementById('content1');
        let container2 = document.getElementById('content2');
        let container3 = document.getElementById('content3');
        let container4 = document.getElementById('content4');
        container1.style.display = 'none';
        container2.style.display = 'block';
        container3.style.display = 'none';
        container4.style.display = 'none';

        //let team_space = document.getElementById('team');//space on the card where the name of team is shown
        //let nameOfTeam = obj.textContent;
        //team_space.innerHTML = nameOfTeam;

        //-----------------------------------------------TEAM-B AL START---------------------------------------------------------------    

        let SHEET_ID_ = '1WUWMhQEUnPcBXFC1kMDojSJ6Fiwu4VvGrPkS44hBza0';
        let SHEET_TITLE_ = 'Sheet1';
        let SHEET_RANGE_ = 'B3:BJ32';

        let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;

                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement2.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var al_off_start = 0;//edit here
                var al_off_end = 54;
                function dataSearch_al_on(index) {
                    let colLength_items = al_off_end
                    for (let i = al_off_start; i < colLength_items; i++) {
                        if (i >= 24 && i <= 24) {//add
                        
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                                
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
        //-----------------------------------------------TEAM-B AL END--------------------------------------------------------------- 

        //-----------------------------------------------TEAM-B TH START---------------------------------------------------------------    

        SHEET_ID_ = '1WUWMhQEUnPcBXFC1kMDojSJ6Fiwu4VvGrPkS44hBza0';
        SHEET_TITLE_ = 'Sheet1';
        SHEET_RANGE_ = 'B35:BJ47';
        FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;

                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement2.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var th_off_start = 0;//edit here
                var th_off_end = 44;
                function dataSearch_al_on(index) {
                    let colLength_items = th_off_end;
                    for (let i = th_off_start; i < colLength_items; i++) {
                        if (i >= 20 && i <= 24 ) {//add
            
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
    })
}
//-----------------------------------------------TEAM-B TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-B END---------------------------------------------------------------

//-----------------------------------------------TEAM-C START---------------------------------------------------------------

function groupThree(obj) {
    showLoginModal('Group 3',() => {
        highlightButton(obj);
        let divElement3 = document.getElementById('team-c');//parentdiv of  div , which displays names of student of team 3
        let container1 = document.getElementById('content1');
        let container2 = document.getElementById('content2');
        let container3 = document.getElementById('content3');
        let container4 = document.getElementById('content4');
        container1.style.display = 'none';
        container2.style.display = 'none';
        container3.style.display = 'block';
        container4.style.display = 'none';

        //let team_space = document.getElementById('team');//space on the card where the name of team is shown
        //let nameOfTeam = obj.textContent;

        //team_space.innerHTML = nameOfTeam;
        //-----------------------------------------------TEAM-C AL START---------------------------------------------------------------
        let SHEET_ID_ = '16xVA9SOSSg5sYQ8VCsYWnEZpgIhFpYwA0VHaOkl9VB0';
        let SHEET_TITLE_ = 'Sheet1';
        let SHEET_RANGE_ = 'B3:BJ32';

        let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;

                for (let i = 0; i < rowLength; i++) {

                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement3.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    console.log(data.table)
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var al_off_start = 0;//edit here
                var al_off_end = 54;
                function dataSearch_al_on(index) {
                    let colLength_items = al_off_end
                    for (let i = al_off_start; i < colLength_items; i++) {
                        if (i >= 24 && i <= 24) {//add
                            
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                                
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
        //-----------------------------------------------TEAM-C AL END---------------------------------------------------------------

        //-----------------------------------------------TEAM-C TH START---------------------------------------------------------------
        SHEET_ID_ = '16xVA9SOSSg5sYQ8VCsYWnEZpgIhFpYwA0VHaOkl9VB0';
        SHEET_TITLE_ = 'Sheet1';
        SHEET_RANGE_ = 'B35:BJ48';

        FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;

                for (let i = 0; i < rowLength; i++) {

                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement3.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var th_off_start = 0;//edit here
                var th_off_end = 44;
                function dataSearch_al_on(index) {
                    let colLength_items = th_off_end;
                    for (let i = th_off_start; i < colLength_items; i++) {
                        if (i >= 20 && i <= 24 ) {//add
                            
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                                
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
    })
}
//-----------------------------------------------TEAM-C TH END---------------------------------------------------------------

//-----------------------------------------------TEAM-C END---------------------------------------------------------------

//-----------------------------------------------TEAM-D START---------------------------------------------------------------

function groupFour(obj) {
    showLoginModal('Group 4',() => {
        highlightButton(obj);
        let divElement4 = document.getElementById('team-d');//parentdiv of  div , which displays names of student of team 4
        let container1 = document.getElementById('content1');
        let container2 = document.getElementById('content2');
        let container3 = document.getElementById('content3');
        let container4 = document.getElementById('content4');
        container1.style.display = 'none';
        container2.style.display = 'none';
        container3.style.display = 'none';
        container4.style.display = 'block';

        //-----------------------------------------------TEAM-D AL START---------------------------------------------------------------
        let SHEET_ID_ = '1_yo5VQhhlEQ9Ow_w6TeQD7bi-xMbDz3Q7_k8ourplMA';
        let SHEET_TITLE_ = 'Sheet1';
        let SHEET_RANGE_ = 'B3:BJ32';

        let FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;
                console.log(rowLength);
                for (let i = 0; i < rowLength; i++) {
                    console.log(i)
                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement4.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var al_off_start = 0;//edit here
                var al_off_end = 54;
                function dataSearch_al_on(index) {
                    let colLength_items = al_off_end
                    for (let i = al_off_start; i < colLength_items; i++) {
                        if (i >= 24 && i <= 24) {//add
                            
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                                
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
        //-----------------------------------------------TEAM-D AL END---------------------------------------------------------------
        //-----------------------------------------------TEAM-D TH START---------------------------------------------------------------
        SHEET_ID_ = '1_yo5VQhhlEQ9Ow_w6TeQD7bi-xMbDz3Q7_k8ourplMA';
        SHEET_TITLE_ = 'Sheet1';
        SHEET_RANGE_ = 'B35:BJ48';

        FULL_URL_ = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID_ + '/gviz/tq?sheet=' + SHEET_TITLE_ + '&range=' + SHEET_RANGE_);

        fetch(FULL_URL_)
            .then(res => res.text())
            .then(rep => {
                let data = JSON.parse(rep.substr(47).slice(0, -2));
                var rowLength = data.table.rows.length;

                for (let i = 0; i < rowLength; i++) {
                    if (data.table.rows[i].c[0].v != null) {
                        let trName = document.createElement('tr');
                        let tdName = document.createElement('td');
                        tdName.innerHTML = data.table.rows[i].c[0].v;

                        const tdButton = document.createElement('td');
                        const button = document.createElement('button');
                        button.className = 'btn';
                        button.textContent = 'Download';
                        tdButton.appendChild(button);

                        trName.appendChild(tdName);
                        trName.appendChild(tdButton);
                        divElement4.appendChild(trName)

                        button.onclick = function () {
                            displayValue_al_on(tdName.innerHTML);

                        }
                    } else {
                        continue;
                    }
                }

                let name_space = document.getElementById('name');// h1 to show name of the students
                let onstage_div = document.getElementById("items-div");// div to show the participating items
                let num_admit = document.getElementById('num-admit');
                let category = document.getElementById('cate');
                let class_space = document.getElementById('class');
                let group_space = document.getElementById('team');

                function displayValue_al_on(name_div) {
                    // Clear the existing content in onstage_div
                    const onstage_div = document.getElementById("items-div");
                    onstage_div.innerHTML = '';
                    for (let i = 0; i < rowLength; i++) {
                        if (data.table.rows[i].c[0].v == name_div) {
                            name_space.innerHTML = data.table.rows[i].c[0].v;
                            num_admit.innerHTML = data.table.rows[i].c[60].v;
                            category.innerHTML = data.table.rows[i].c[59].v;
                            class_space.innerHTML = data.table.rows[i].c[58].v;
                            group_space.innerHTML = data.table.rows[i].c[57].v;
                            dataSearch_al_on(i);
                            showContainerBox();
                            return i;
                        }
                    }
                }

                function showContainerBox() {
                    // Display the container-box
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'flex';
                    document.body.style.overflow = 'hidden'; // Disable scrolling
                }

                function hideContainerBox() {
                    const containerBox = document.querySelector('.container-box');
                    containerBox.style.display = 'none';
                    document.body.style.overflow = 'auto'; // Enable scrolling
                }

                function closeContainerBox() {
                    hideContainerBox();
                }

                // Add an event listener to close the container box on overlay click
                const overlay = document.querySelector('.container-box'); // Adjust the selector based on your HTML
                overlay.addEventListener('click', closeContainerBox);

                document.addEventListener('keydown', function (event) {
                    if (event.key === 'Escape') {
                        closeContainerBox();
                    }
                });

                var th_off_start = 0;//edit here
                var th_off_end = 44;
                function dataSearch_al_on(index) {
                    let colLength_items = th_off_end;
                    for (let i = th_off_start; i < colLength_items; i++) {
                        if (i >= 20 && i <= 24 ) {//add
                           
                            continue;
                        } else {
                            if (data.table.rows[index].c[i].v == true) {
                                insertElement_al_on(onstage_div, data.table.cols[i].label);//name
                            
                            }
                        }
                    }
                }

                function insertElement_al_on(div, data) {
                    let newElement = document.createElement('p');
                    let signBlock = document.createElement('p');
                    newElement.className = 'programs';
                    newElement.id = 'listset'
                    signBlock.className = 'programs2';
                    div.append(newElement);
                    div.append(signBlock);
                    newElement.innerHTML = data;
                }
            }
            )
    })
}
//-----------------------------------------------TEAM-D TH END--------------------------------------------------------------

//-----------------------------------------------TEAM-D END-----------------------------------------------------------------
function highlightButton(obj) {
    // Remove "active" class from all buttons
    const buttons = document.querySelectorAll('.card');
    buttons.forEach(button => button.classList.remove('active'));

    // Add "active" class to the clicked button
    obj.classList.add('active');
}

//------------------------------------------------PRINT KEY BUTTON ACTIVE---------------------------------------------------
const btn = document.getElementById('bttn');
const lightBox = document.getElementById('bgRemove')
btn.addEventListener('click', function () {
lightBox.style.backgroundColor = 'none'
    print();
})

//----------------------------------------------------SEARCH and FILTER----------------------------------------------------- 
function searchTable(inputId, tableId) {
    const input = document.getElementById(inputId);
    const filter = input.value.toUpperCase();
    const table = document.getElementById(tableId);
    const tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// Event listeners for each search input
document.getElementById("search-input-team-a").addEventListener("keyup", function () {
    searchTable("search-input-team-a", "team-a");
});

document.getElementById("search-input-team-b").addEventListener("keyup", function () {
    searchTable("search-input-team-b", "team-b");
});

document.getElementById("search-input-team-c").addEventListener("keyup", function () {
    searchTable("search-input-team-c", "team-c");
});

document.getElementById("search-input-team-d").addEventListener("keyup", function () {
    searchTable("search-input-team-d", "team-d");
});
