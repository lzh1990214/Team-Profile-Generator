const createHTML = (InputArray) => {
    let newEmployeeCard = '';
    // use for loop to switch between Engineer and Intern object and extract user input data
    for (let i = 1; i < InputArray.length; i++) {
        switch (InputArray[i].getRole()) {
            case 'Software Engineer':
                newEmployeeCard += `
                <section class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <i class="fa-solid fa-code"></i>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">${InputArray[i].name}</p>
                                    <p class="subtitle is-6">${InputArray[i].getRole()}</p>
                                    <ul>
                                        <li>Employee ID: ${InputArray[i].id}</li>
                                        <li><a href="mailto:${InputArray[i].email}">Email: ${InputArray[i].email}</a></li>
                                        <li><a href="https://github.com/${InputArray[i].github}">GitHub: ${InputArray[i].github}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
                break;

            case 'Intern':
                newEmployeeCard += `
                <section class="column is-4">
                    <div class="card">
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <i class="fa-solid fa-graduation-cap"></i>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">${InputArray[i].name}</p>
                                    <p class="subtitle is-6">${InputArray[i].getRole()}</p>
                                    <ul>
                                        <li>Employee ID: ${InputArray[i].id}</li>
                                        <li><a href="mailto:${InputArray[i].email}">Email: ${InputArray[i].email}</a></li>
                                        <li>School: ${InputArray[i].school}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>`;
                break;
        }
    };

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="./reset.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        <link rel="stylesheet" href="./style.css" />
        <script src="https://kit.fontawesome.com/114cf67037.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <header id="header" class="hero">
            <div class="hero-body">
                <h1 class="title">Project Team</h1>
            </div>
        </header>

        <!-- employee cards section -->
        <section id="plant-card-container" class="columns is-multiline is-centered mx-2">
            <section class="column is-4">
                <div class="card">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                                <i class="fa-solid fa-mug-hot "></i>
                            </div>
                            <div class="media-content">
                                <p class="title is-4">${InputArray[0].name}</p>
                                <p class="subtitle is-6">Project Manager</p>
                                <ul>
                                    <li>Employee ID: ${InputArray[0].id}</li>
                                    <li><a href="mailto:${InputArray[0].email}">Email: ${InputArray[0].email}</a></li>
                                    <li>Office Number: ${InputArray[0].officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            ${newEmployeeCard}
        </section>
    </body>
    </html>`;
}

module.exports = createHTML;
