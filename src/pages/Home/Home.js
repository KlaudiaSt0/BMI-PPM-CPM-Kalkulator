import React from 'react';
import arrow from "./arrow.svg";

const Home = () => {
    return <div className="container">
        <div className="home_block">
            <h2 className="header">BMI&nbsp;- Body&nbsp;Mass&nbsp;Index</h2>
            <p>
                BMI (ang. body mass index, wskaźnik masy ciała) – to wskaźnik wykorzystywany do oceny stopnia odżywienia organizmu, który określa czy masa ciała jest prawidłowa w odniesieniu do wzrostu.
                Wzór na obliczenie BMI bierze pod uwagę masę ciała wyrażoną w kilogramach, którą należy podzielić przez wzrost wyrażony w metrach i podniesiony do drugiej potęgi. Otrzymaną wartość interpretuje się zgodnie z określonymi przedziałami na wygłodzenie, wychudzenie, niedowagę, prawidłową masę ciała, nadwagę lub otyłość I, II i III stopnia. Ponieważ wskaźnik nie bierze pod uwagę zawartości tkanki tłuszczowej, masy mięśniowej oraz gęstości kości, wynik nie jest wiarygodny w odniesieniu do kobiet w ciąży, osób o bardzo umięśnionej sylwetce, niepełnosprawnych i z chorobami przebiegającymi z nadmiernym zatrzymywaniem wody w organizmie.
            </p>
            <a href="http://localhost:3000/BMI#/BMI" className={["home_btn", "btn-BMI"].join(' ')}>Oblicz BMI <img src={arrow} alt="arrow" name="arrow" className="img"/></a>
        </div>
        <div className="home_block">
            <h2 className="header">PPM&nbsp;- podstawowa&nbsp;przemiana&nbsp;materii</h2>
            <p>
                Podstawowa przemiana materii to jest liczba kalorii niezbędna do utrzymania podstawowych funkcji życiowych,
                kiedy organizm znajduje się w naturalnych warunkach (m.in. optymalnej temperaturze otoczenia, komforcie psychicznym) i w stanie absolutnego spoczynku. Ta wartość nie uwzględnia energii wykorzystywanej na aktywność fizyczną. Podstawowa przemiana materii określa, ile kalorii należy dostarczać organizmowi, aby podtrzymać podstawowe procesy fizjologiczne. Należą do nich m.in. regeneracja tkanek, praca układu nerwowego, serca czy układu oddechowego. Aby zachować zdrowie, dieta (również odchudzająca) nie powinna zapewniać mniej kalorii niż wynosi podstawowa przemiana materii. Jest to jedna ze składowych całodziennych wydatków energetycznych organizmu.
            </p>
            <a href="http://localhost:3000/BMI#/PPM" className={["home_btn", "btn-PPM"].join(' ')}>Oblicz PPM <img src={arrow} alt="arrow" name="arrow" className="img"/></a>
        </div>
        <div className="home_block">
            <h2 className="header">CPM&nbsp;- całkowita&nbsp;przemiana&nbsp;materii</h2>
            <p>
                Kalkulator CPM (ang. total metabolic rate, całkowita przemiana materii) – służy do obliczenia sumy wszystkich wydatków energetycznych organizmu w ciągu dnia. Uwzględnia więc podstawową przemianę materii, a także ilość kalorii wydatkowaną podczas aktywności fizycznej. Aby obliczyć całkowitą przemianę materii należy wartość podstawowej przemiany materii (BMR) pomnożyć przez wskaźnik aktywności fizycznej (PAL) dla osób o małej, umiarkowanej lub dużej aktywności fizycznej. Obliczona wartość stanowi punkt wyjścia, ponieważ dostarcza informacji ile kalorii należy spożywać, aby utrzymać obecną masę ciała. Jeżeli chcemy schudnąć i obniżyć zawartość tłuszczu w ciele, od obliczonej wartości należy odjąć ok 300-500 kcal. Natomiast przy budowaniu masy mięśniowej – dodać ok 300-500 kcal i wykonywać trening siłowy.
            </p>
            <a href="http://localhost:3000/BMI#/CPM" className={["home_btn", "btn-CPM"].join(' ')}>Oblicz CPM <img src={arrow} alt="arrow" name="arrow" className="img"/> </a>
        </div>

        </div>

};

export default Home;