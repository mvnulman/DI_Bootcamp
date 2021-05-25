// let frm = document.getElementById("form1") (primeira opção de seletor)
// let input = document.getElementById('input1')


// let frm = document.forms (segunda opção de seletor)
// console.log(frm)

// let frm = document.forms.my_form (terceira opção de seletor. Mas, precisa nomear no input: name="example")


//event listener para o botão, previnir comportamento padrão de reload e verificar se o campo está em branco.
// frm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     let val = input.value;
//     if(val.length>0){
//       frm.submit();  
//     }
// })


// Differences between GET and POST methods:
// GET can show the informations in the URL
// POST will storage the info in the body of the HTTP


// para deixar o seletor  como padrão:
//sel.value = 'banana'
// sel.selectedIndex = 1;
// self.options[3].selected = true;


// exercise in class
// let form = form1.elements.select1;
// let filterOptions = Array.from(form.options).filter(item => {
//     return item.selected;
// })

// .map(item => {
//     return item.value
// });

// console.log(filterOptions)


//-----------------------------



// adicionar a opção JAZZ ao formulário:

// opcao 1
// let form = form1.elements.select1;
// console.log(form)

// const newOption = document.createElement('option')
// const optionText = document.createTextNode('Jazz')


// newOption.appendChild(optionText);
// form.appendChild(newOption);

// newOption.selected = true;




// opcao 2
// let add = (name) => {
//     var sel = frm.elements.select1
//     var option = document.createElement("option");
//     option.text = name;
//     option.selected = true
//     sel.add(option);
// }
// add('Jazz')