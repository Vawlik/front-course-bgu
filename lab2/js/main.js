document.addEventListener('DOMContentLoaded', () => {
    const getRandomCharacterBtn = document.getElementById('getRandomCharacterBtn');
    const getRandomPlanetBtn = document.getElementById('getRandomPlanetBtn');
    const content = document.getElementById('content');

    getRandomCharacterBtn.addEventListener('click', () => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                const randomCharacterNumber = Math.floor(Math.random() * data.count) + 1;
                return fetch(`https://swapi.dev/api/people/${randomCharacterNumber}/`);
            })
            .then(response => response.json())
            .then(data => {
                const replaceUnknown = value => value === 'unknown' ? 'неизвестно' : value;

                const characterInfo = `
                    <h2>${replaceUnknown(data.name)}</h2>
                    <p><strong>Рост:</strong> ${replaceUnknown(data.height)} см</p>
                    <p><strong>Вес:</strong> ${replaceUnknown(data.mass)} кг</p>
                    <p><strong>Цвет волос:</strong> ${replaceUnknown(data.hair_color)}</p>
                    <p><strong>Цвет кожи:</strong> ${replaceUnknown(data.skin_color)}</p>
                    <p><strong>Цвет глаз:</strong> ${replaceUnknown(data.eye_color)}</p>
                    <p><strong>Год рождения:</strong> ${replaceUnknown(data.birth_year)}</p>
                    <p><strong>Пол:</strong> ${replaceUnknown(data.gender)}</p>
                `;
                content.innerHTML = characterInfo;
            })
            .catch(error => {
                console.log('Ошибка при получении персонажа:', error);
                content.innerHTML = '<p>Ошибка при получении персонажа. Пожалуйста, попробуйте снова.</p>';
            });
    });

    getRandomPlanetBtn.addEventListener('click', () => {
        fetch('https://swapi.dev/api/planets/')
            .then(response => response.json())
            .then(data => {
                const randomPlanetNumber = Math.floor(Math.random() * data.count) + 1;
                return fetch(`https://swapi.dev/api/planets/${randomPlanetNumber}/`);
            })
            .then(response => response.json())
            .then(data => {
                const replaceUnknown = value => value === 'unknown' ? 'неизвестно' : value;

                const planetInfo = `
                    <h2>${replaceUnknown(data.name)}</h2>
                    <p><strong>Климат:</strong> ${replaceUnknown(data.climate)}</p>
                    <p><strong>Диаметр:</strong> ${replaceUnknown(data.diameter)}</p>
                    <p><strong>Гравитация:</strong> ${replaceUnknown(data.gravity)}</p>
                    <p><strong>Орбитальный период:</strong> ${replaceUnknown(data.orbital_period)}</p>
                    <p><strong>Население:</strong> ${replaceUnknown(data.population)}</p>
                    <p><strong>Период вращения:</strong> ${replaceUnknown(data.rotation_period)}</p>
                    <p><strong>Вода на поверхности:</strong> ${replaceUnknown(data.surface_water)}</p>
                    <p><strong>Территория:</strong> ${replaceUnknown(data.terrain)}</p>
                `;
                content.innerHTML = planetInfo;
            })
            .catch(error => {
                console.log('Ошибка при получении планеты:', error);
                content.innerHTML = '<p>Ошибка при получении планеты. Пожалуйста, попробуйте снова.</p>';
            });
    });
});