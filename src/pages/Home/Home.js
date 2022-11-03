import React from 'react';

const Home = () => {
    return <div className="container">
        <div className="home_block">
            <h2>BMI - Body Mass Index</h2>
            <p>
                Kalkulator BMI (ang. body mass index, wskaźnik masy ciała) – jest to jedno z najpopularniejszych narzędzi stosowanych przez dietetyków w codziennej pracy z pacjentem. BMI to wskaźnik wykorzystywany do oceny stopnia odżywienia organizmu, który określa czy masa ciała jest prawidłowa w odniesieniu do wzrostu.
                Wzór na obliczenie BMI bierze pod uwagę masę ciała wyrażoną w kilogramach, którą należy podzielić przez wzrost wyrażony w metrach i podniesiony do drugiej potęgi. Otrzymaną wartość interpretuje się zgodnie z określonymi przedziałami na niedowagę, prawidłową masę ciała, nadwagę lub otyłość. Zbyt niska lub zbyt wysoka wartość BMI to sygnał, by lepiej przyjrzeć się swojej diecie, nawykom żywieniowym i poziomowi aktywności fizycznej. Kalkulator BMI znajduje zastosowane w ocenie masy ciała u osób dorosłych z pewnymi wyjątkami. Ponieważ wskaźnik nie bierze pod uwagę zawartości tkanki tłuszczowej, masy mięśniowej oraz gęstości kości, wynik nie jest wiarygodny w odniesieniu do kobiet w ciąży, osób o bardzo umięśnionej sylwetce, niepełnosprawnych i z chorobami przebiegającymi z nadmiernym zatrzymywaniem wody w organizmie.
            </p>
            <a href="http://localhost:3000/BMI#/BMI">Oblicz BMI</a>
        </div>
        <div className="home_block">
            <h2>PPM - podstawowa przemiana aterii</h2>
            <p>
                Podstawowa przemiana materii to jest liczba kalorii niezbędna do utrzymania podstawowych funkcji życiowych,
                kiedy organizm znajduje się w naturalnych warunkach (m.in. optymalnej temperaturze otoczenia, komforcie psychicznym) i w stanie absolutnego spoczynku. Ta wartość nie uwzględnia energii wykorzystywanej na aktywność fizyczną. Podstawowa przemiana materii określa, ile kalorii należy dostarczać organizmowi, aby podtrzymać podstawowe procesy fizjologiczne. Należą do nich m.in. regeneracja tkanek, praca układu nerwowego, serca czy układu oddechowego. Aby zachować zdrowie, dieta (również odchudzająca) nie powinna zapewniać mniej kalorii niż wynosi podstawowa przemiana materii. Jest to jedna ze składowych całodziennych wydatków energetycznych organizmu.
            </p>
            <a href="http://localhost:3000/BMI#/PPM">Oblicz PPM</a>
        </div>
        <div className="home_block">
            <h2>CPM - całkowita przemiana materii</h2>
            <p>
                Kalkulator CPM (ang. total metabolic rate, całkowita przemiana materii) – służy do obliczenia sumy wszystkich wydatków energetycznych organizmu w ciągu dnia. Uwzględnia więc podstawową przemianę materii, a także ilość kalorii wydatkowaną podczas aktywności fizycznej. Aby obliczyć całkowitą przemianę materii należy wartość podstawowej przemiany materii (BMR) pomnożyć przez wskaźnik aktywności fizycznej (PAL) dla osób o małej, umiarkowanej lub dużej aktywności fizycznej. Obliczona wartość stanowi punkt wyjścia, ponieważ dostarcza informacji ile kalorii należy spożywać, aby utrzymać obecną masę ciała. Jeżeli chcemy schudnąć i obniżyć zawartość tłuszczu w ciele, od obliczonej wartości należy odjąć ok 300-500 kcal. Natomiast przy budowaniu masy mięśniowej – dodać ok 300-500 kcal i wykonywać trening siłowy.
            </p>
            <a href="http://localhost:3000/BMI#/CPM">Oblicz CPM</a>
        </div>

        </div>

};

export default Home;