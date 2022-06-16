const { render, getByTestId } = require("@testing-library/react");
const { FirstApp } = require("../FirstApp");

describe('Pruebas en FirstApp', () => { 


    /* test('Debe de hacer el match con el Snapshot', () => {

        const title = 'Hola, soy Chepito';
        const { getByText } = render( < FirstApp  title={title} /> );
        expect( getByText( title ).toBeTruthy ).toMatchSnapshot();

     }) */


    test('Debe mostrar el título en un h1', () => { 

        const title = "Hola, soy Chepito";
        const {container, getByText, getByTestId } = render( < FirstApp  title={title} /> );
        expect( getByText( title ) ).toBeTruthy();

        /* const h1 = container.querySelector('h1');
        expect( h1.innerHTML).toContain( title ); */
        expect( getByTestId('test-title').innerHTML).toContain(title);

     }) 

     test('Debe de mostrar el subtítulo eviador por props', () => { 

        const title = "Hola, soy Chepito";
        const subTitle = "soy un sbutitulo";
        // const {getByText } = render( 
        const {getAllByText } = render( 
        < FirstApp  
            title={title}
            subTitle={subTitle}

            /> );
        // expect( getByText( subTitle ) ).toBeTruthy();

        expect( getAllByText( subTitle ).length ).toBe(2);


      })    


 })


























