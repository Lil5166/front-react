import React, { Component } from 'react';
import Image from '../image/Image';
import './styles/style.css';

class Content extends Component {
    constructor(props) {
        super(props);
        this.n = 3;
        this.targetIndex = (this.n % 10) + 1;
    }

    toggleColor(element, colorClass) {
        element.classList.toggle(colorClass);
    }

    componentDidMount() {
        const targetElementId = document.getElementById(`item-${this.targetIndex}`);
        const nextElement = document.querySelector(`#item-${this.targetIndex + 1}`);

        // Клік з getElementById
        if (targetElementId) {
            targetElementId.addEventListener('click', () => {
                this.toggleColor(targetElementId, 'bg-color-1');
            });
        }

        // Клік з querySelector
        if (nextElement) {
            nextElement.addEventListener('click', () => {
                this.toggleColor(nextElement, 'bg-color-2');
            });
        }

        const imageContainer = document.querySelector('a[href="https://lviv.travel"]');

        const addImage = () => {
            if (!document.getElementById('image')) {
                const newImage = document.createElement('img');
                newImage.id = 'image';
                newImage.src = 'https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRqKETbMVecfJL5CBhS40owt1N8dFZwYCQqSXKi7MdBEF3QJ0dmJ31mJnnxnltrdI1JNHp8O5MzrICZv2sz4zFrr2ugtxICD0DOngNnWA';
                newImage.alt = 'Відень, Австрія';
                newImage.width = 600;
                imageContainer.appendChild(newImage);
            }
        };

        const increaseImage = () => {
            const image = document.getElementById('image');
            if (image) {
                image.width += 50;
            }
        };

        const decreaseImage = () => {
            const image = document.getElementById('image');
            if (image && image.width > 50) {
                image.width -= 50;
            }
        };

        const removeImage = () => {
            const image = document.getElementById('image');
            if (image) {
                image.remove();
            }
        };

        document.getElementById('add').addEventListener('click', addImage);
        document.getElementById('increase').addEventListener('click', increaseImage);
        document.getElementById('decrease').addEventListener('click', decreaseImage);
        document.getElementById('remove').addEventListener('click', removeImage);
    }

    render() {
        return (
            <div>
                <p>Дата народження: 24 травня 2005 року<br/>Місце народження: Житомир, Україна</p>
                <p id="item-4">Освіта: Гімназія №267, м.Київ<br/>
                    &emsp; &emsp; НТУУ "КПІ ім. Ігоря Сікорсього" ФІОТ, група ІА-23</p>
                <h3 id="item-5">Мої хобі:</h3>
                <ul>
                    <li>Читання книг</li>
                    <li>Спорт</li>
                    <li>Фотографія</li>
                </ul>
                <h3>Мої улюблені книги або фільми:</h3>
                <ol>
                    <li>Фільм: «Борад :)»</li>
                    <li>Книга: «Майстер і Маргарита»</li>
                    <li>Фільм: «Інтерстеллар»</li>
                </ol>
                <h3>Моє улюблене місто:</h3>
                <p>Одним з моїх улюблених міст є Львів. Це місто з багатою історією, неймовірною архітектурою та
                    чарівною атмосферою. Прогулянки вузькими вуличками старого міста залишають незабутні враження.</p>
                <Image/>
                <div>
                    <button id="add">Додати зображення</button>
                    <button id="increase">Збільшити зображення</button>
                    <button id="decrease">Зменшити зображення</button>
                    <button id="remove">Видалити зображення</button>
                </div>
            </div>
        );
    }
}

export default Content;