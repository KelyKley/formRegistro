import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="container">
  <h2 class="text-center">Registro de Mascota</h2>
 
  <form class="form-horizontal">
    <div class="form-group">
      <label class="control-label col-sm-2">Nombre:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="name" placeholder="Nombre de Mascota" required/>
      </div>
    </div>
    
    <div class="form-group">
      <label class="control-label col-sm-2">Tipo de Mascota:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" placeholder="Ejm: perro" required/>
      </div>
    </div>
    
    <div class="form-group">
      <label class="control-label col-sm-2">Sexo:</label>
      <div class="col-sm-10">  
      	<select required>
          <option value=""></option>
          <option value="hembra">Hembra</option>
          <option value="macho">Macho</option>
        </select>
      </div>
    </div> 
    
    <div class="form-group">
      <label class="control-label col-sm-2">Edad Actual (o aprox.):</label>
      <div class="col-sm-10">          
        <select>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
          <option value="four">4</option>
          <option value="five">5</option>
          <option value="six">6</option>
          <option value="seven">7</option>
          <option value="eight">8</option>
          <option value="nine">9</option>
          <option value="ten">10</option>
          <option value="eleven">11</option>
          <option value="twelve">12</option>
        </select>
        <select>
          <option value="meses">Meses</option>
          <option value="años">Años</option>
        </select>
      </div>
    </div>
    
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox"/> Esterelizado(a):</label>
        </div>
      </div>
    </div>
    
    <div class="form-group">
      <label class="control-label col-sm-2">Color y señas particulares:</label>
      <div class="col-sm-10">  
      	<div class="comment-text-area">
      <textarea class="textinput" placeholder="Necesario para el reconocimiento de mascota"></textarea>
    </div>
      </div>
    </div> 
 
    <div class="form-group">
      <label class="control-label col-sm-2">Enfermedades:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" placeholder="¿Tú mascota posee alguna enfermedad?"/>
      </div>
    </div>

    <div class="form-group">
      <label class="control-label col-sm-2">Vacunas:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" placeholder="¿Tú mascota se encuentra vacunada?"/>
      </div>
    </div>
    
     <div class="form-group">
      <label class="control-label col-sm-2">Estado de mascota:</label>
      <div class="col-sm-10">  
      	<select>
          <option value=""></option>
          <option class="activo" value="activo">Activo</option>
          <option value="perdido">Perdido</option>
        </select>
      </div>
    </div> 
         <div class="well">El <strong>estado</strong> de tu mascota es de suma importancia:<br/><strong>Activo : </strong>La mascota se encuentra bajo el cuidado de su propietario.<br/>
<strong>Perdido : </strong>La mascota se encuentra pérdida, ten en cuenta que la mascota irá directamente a la lista de pérdidos.<br/>
         </div>


    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">Registrar</button>
      </div>
    </div>
  </form>
  

</div>

    );
  }
}

export default App;
