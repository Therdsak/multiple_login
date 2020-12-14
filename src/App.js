import logo from './logo.svg';
import './App.css';
import FacebookLogin from '@dotmatter/reaction-plugin-facebook-login';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <FacebookLogin
          appId="291077344314809"
          autoLoad={true}
          fields="name,email,picture"
          scope="public_profile,user_friends,user_actions.books"

        />

      </header>
    </div>
  );
}

export default App;
