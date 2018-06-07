import Header from './components/Header';

export default function Base(props) {
    console.log(props)
    return (
        <div>
            <Header />
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}