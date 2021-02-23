    var root = document.getElementById('root');

    var node = {
        name : "kemal",
        surName : "bekcan",
        description : [],
    };
    function onFormSubmit(event){
        event.preventDefault();
        var item = event.target.elements.txtItem.value;
        if(item){
            node.description = item;
            event.target.elements.txtItem.value='';
            render();
        }
        console.log("Form submited");
    }


    function render(){
        var notlar = [];
        var template = <div>
       <h1>Notlar :</h1>
       <ul>
           <li>
           Ad : {node.name}
           </li>
           <li>
           Soyad : {node.surName}
           </li>
            <li>
               {(node.description.length == 0) ? '' : 'Not :'+(node.description)}
           </li>
       </ul>
       
       <form onSubmit={onFormSubmit}>
           <input type="text" name="txtItem"></input><br></br><br></br>
           <button type="submit">Not Ekle</button>
       </form>
       
   </div>;

   ReactDOM.render(template, root);
    }
   render();