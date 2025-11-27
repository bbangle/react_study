
import './App.css'

function Header(){
    return <header>헤더 영역</header>;
}

function Footer() {
    return <footer>footer area</footer>;
}

function Greeting(props: { name: string }) {
    return <h1>Hello, {props.name}님</h1>;
}

function App() {
    return (
        <div>
            <Header></Header>
            <main>
                <Greeting name={"개발자"}/>
            </main>
            <Footer></Footer>ㅊ
        </div>
    );
}

export default App;
