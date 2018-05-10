import React, { Component } from 'react';
import PostList from '../../components/posts-list';
import Spinner from 'react-spinkit';
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    // Se setea el estado inicial de la aplicación
    this.state = {
        // isLoading es false hasta que se le pidan datos al Rest API
        isLoading: false,
        postsArray: []
    };
  }

  componentDidMount() {
    // Es una buena práctica hacer la llamada al Rest API en el componentDidMount life cycle
    // ya que en este momento sabemos que el componente se encuentra montado en el DOM

    // isLoading se coloca en true para que se muestre el spinner y se oculte la lista de posts
    this.setState({isLoading: true});
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {

            // Agregar un timeout de 5 segundos para ver el icono de 'cargando' más tiempo
            setTimeout(() => {
                this.setState({

                    // Aquí los post ya fueron cargados del Rest API, entonces isLoading se pone el false
                    isLoading: false,
                    postsArray: posts
                });
            }, 5000);
        });
  }

  render() {
      let content;

      if (this.state.isLoading) {

        // Si isLoading es true mostramos el spinner
        content = <Spinner name="chasing-dots" color="steelblue" className="spinner"/>;
      } else {

        // Si isLoading es false mostramos la lista de posts que se guardaron en el state
        content = <PostList posts={this.state.postsArray}/>;
      }

    return (
      <div className="Home">
        <p className="Home-intro">
          This is a sample app with React that fetches posts info from an external Rest API
        </p>
        {
          // Mostramos lo que tenga content (ya sea el spinner o la lista de posts)
          content
        }
      </div>
    );
  }
}

export default Home;