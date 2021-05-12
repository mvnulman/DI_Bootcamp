        let a = [
            [0, 0, 1, 1, 1, 0, 0],
            [0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 1, 1, 0],
            [0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1, 0],
        ];
        let size = '30px 30px 30px 30px 30px 30px 30px';
        let div = document.createElement('div');
        div.setAttribute('id', 'container');
        div.style.display = 'grid';
        div.style.gridTemplateColumns = size;
        div.style.gridTemplateRows = size;
        document.body.appendChild(div);

        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                let p = document.createElement('p');
                p.style.fontSize = '2em';
                p.style.textAlign = 'center';
                if (a[i][j] == 1) {
                    p.appendChild(document.createTextNode('*'));
                }
                div.appendChild(p);
            }
        }