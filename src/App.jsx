import './App.css'
import Upload from './Upload'
import Avatar from './Avatar'
import UIMockups from './UIMockups'
import UIMockupsSettings from './UIMockupsSettings'
import BlogShowcase from './BlogShowcase'
import Navbar from './NavBar'
import NewProject from './NewProject'
import Banner from './Banner'
import BotChat from './BotChat'
import SideBarLeft from './SideBarLeft'

const components = {
    ui: UIMockups,
    uiset: UIMockupsSettings
};

function LoadUIComponent(props) {
    const UIComponent = components[props.componentType];
    return <UIComponent components={props.component} />;
}

function App() {

  return (
    <>
      <header>
        <Navbar />
        <SideBarLeft />
      </header>
        <div className="flex min-h-screen flex-col">
        <div className="flex flex-1 flex-row">
          <main className="flex-1">
            <Banner />
            <UIMockups />
            <BotChat />
            <BlogShowcase />
            <NewProject />
            <Upload />
            <Avatar />
          </main>
          <nav></nav>
          <aside></aside>
        </div>
        <footer></footer>
      </div>
    </>
  )
}

export default App