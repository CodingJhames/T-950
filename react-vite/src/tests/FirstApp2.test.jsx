const { render, screen } = require("@testing-library/react");
const { FirstApp } = require("../FirstApp");

describe('Pruebas en FirstApp', () => { 

    const title    = 'Hola, soy micho';
    const subTitle = 'soy un subtitulo';

    test('Debe de hacer match con el snapshot', () => { 

        const { container } = render( <FirstApp  title={title} /> );
        expect( container).toMatchSnapshot();

     })

     test('Debe de mostrar el mensaje "Hola, soy micho"', () => { 

        render( <FirstApp  title={title} /> );
        // screen.debug(); --> para ver el objeto
        expect( screen.getAllByText(title) ).toBeTruthy();

     })


     test('Debe de mostrar el titulo en un h1', () => { 

        render( <FirstApp  title={title} /> );
        expect( screen.getByRole('heading', { level:1}).innerHTML ).toContain(title);
      })

      test('Debe de mostrar el subtitulo enviado por props', () => {

        render( <FirstApp  
            subTitle ={subTitle}
            title={title} 
            /> );

        expect( screen.getAllByText( subTitle ).length ).toBe(2);


       })
    
     

 })


























