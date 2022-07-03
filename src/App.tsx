import React from 'react';
import './App.css';
import { RichTextEditorComponent, Toolbar, Link, Table, QuickToolbar,
  Image, HtmlEditor, Inject } from '@syncfusion/ej2-react-richtexteditor';

import { text } from 'stream/consumers';

class App extends React.Component {

  public customToolbarSettings : object = {
    items: ['Bold', 'Italic', 'Undo', 'Redo', 'CreateTable', 'CreateLink','OrderedList','UnorderedList','InsertCode']
  }; 
  rteObject ! : RichTextEditorComponent;
  public rteValue ! : string;
  
  render() {
    return (
      <div   >  
        
          
        
        <RichTextEditorComponent ref={(richtexteditor : RichTextEditorComponent)=> {this.rteObject=richtexteditor}}
        toolbarSettings={this.customToolbarSettings} >
          
  
      
        <Inject services = {[Toolbar, Link, HtmlEditor, Table]}></Inject>
        </RichTextEditorComponent>
        
      </div>
    );
  }
}
   

export default App;



 
 
