import { IPage, PageDict } from '@/mytypes';

const pageArray: IPage[] = [
  {
    id: `intro`,
    html: `<h1 title="Introducción" class="doble">La cacería secreta</h1>
    <p>
      Vas a leer una aventura ambientada en el mundo de Tramórea. Para jugar
      esta aventura tendrás que tomar decisiones que marcarán la diferencia
      entre el éxito o el fracaso.
    </p>
    <hr />
    <p>
      No es necesario (aunque si lo has hecho, disfrutarás aún más de la
      aventura) que hayas leído <i>La Espada de Fuego</i> de Javier Negrete,
      novela en la que está ambientado este libro-juego.
    </p>
    <p>
      En <i>La cacería secreta</i> vas a afrontar peligros de diversa índole que
      se saldarán con tu victoria o tu muerte. En ese último caso siempre puedes
      volver a empezar, tomando otras decisiones para intentar cambiar el rumbo
      de los acontecimientos.
    </p>
    <p>
      Prepárate para interpretar al protagonista de <i>La cacería secreta</i>.
      Esperamos que te diviertas con la experiencia.
    </p>
    <p class="doble">Presentación del personaje</p>
    <p>
      Eres alumno de quinto grado de la famosa escuela Uhdanfiún, la academia de
      artes marciales más prestigiosa y antigua de Tramórea. Tercer hijo de una
      acomodada familia Ainari, estás predestinado por herencia familiar a
      convertirte en un gran guerrero. Pero tu verdadera pasión es la
      investigación, consecuencia de tu insaciable curiosidad. Lo cual no impide
      que, a tus diecisiete años, seas un aventajado guerrero y que ya tengas el
      título de Ibtahán, como Maestro menor del Tahedo de quinto grado. Estamos
      a principios de Anfiundanil del año 998 y hace pocas semanas se te reveló
      el secreto de Protahitéi, por lo que ya luces las correspondientes cinco
      marcas azules en tu brazalete.
    </p>`,
    actions: [
      {
        id: `01`,
        text: `comenzar`,
      },
      {
        id: `Glosario`,
        text: `Glosario`,
      },
      {
        id: `DramatisPersonae`,
        text: `Dramatis Personae`,
      },
    ],
  },
  {
    id: `01`,
    html: `<p class="h1alt">Cómo empieza todo</p>

    <p>Junto con el resto de alumnos, has abandonado Koras hace pocos días, bajo la tutela de unos cuantos instructores de Uhdanfiún, para practicar las habilidades de supervivencia y exploración.</p>
  
    <p>Tras una larga marcha que os ha llevado hacia el este, llegáis agotados a una zona aislada y montañosa, cerca del desierto de Guiños y del bosque de Corocín, para hacer vivaque. La aldea más cercana, Banta, está a varios kilómetros de distancia. Os dividís por grupos para construir refugios y pasar la noche.</p>
  
    <p>Uno de los grupos destaca sobre el resto. Su cabecilla se llama Deilos, es hijo de una buena familia Ainari y cuenta con un grupo de moscones que lo adulan. Deilos es Ibtahán de sexto grado, pero su comportamiento prepotente no te acaba de convencer, por lo que ya has declinado en varias ocasiones su ofrecimiento para unirte a la camarilla que él lidera.</p>
  
    <p>Tus compañeros de grupo son un simpático Ritión llamado Zarenyo y Dahzor, perteneciente a la Horda Roja. Has podido observar que Deilos y los demás desprecian bastante a Zarenyo, al que no consideran merecedor de pertenecer a Uhdanfiún.</p>
  
    <p>Os disponíais a buscar alimento después de construir vuestros refugios, cuando os atacan súbitamente con proyectiles, principalmente rocas y pedruscos que parecen ser lanzados mediante hondas, aunque no acertáis a distinguir los agresores.</p>
  
    <p>En medio del caos producido por el ataque sorpresa, tienes que tomar tu primera decisión.</p>`,
    actions: [
      {
        id: `199`,
        text: `Decides protegerte y estar a la defensiva ante un posible ataque`,
      },
      {
        id: `165`,
        text: `Intentas contraatacar`,
      },
    ],
  },
  {
    id: `02`,
    html: `<p>Te cuesta reaccionar en medio de la pesadilla que estás viviendo, pero la desesperación de la chiquilla que te llama te hace reaccionar. Por otra parte, la alarma está cundiendo en todo el valle y lo mejor será que los aldeanos se fijen en el grupo que está huyendo mientras vosotros escapáis por los lindes del bosque.</p>

      <p>Enfundas la espada y corres hacia ella, saltando la tapia como un gamo.</p>
    
      <p>Ambos corréis ladera arriba para ocultaros en los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: `68`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `03`,
    html: `<p>—Ya estamos todos —masculla Deilos al verlo—. Sigamos.</p>

    <p>Deilos encabeza la marcha, ahora con mucho más sigilo, progresando con la tensión de un cazador que se dispone a cobrar su presa. Tú prefieres dejar pasar a todos para cerrar la marcha y cubrir la retaguardia.</p>
  
    <p>Empezáis a avanzar pisando la hierba de los bordes de un sendero que rodea los primeros cercados de la pradera sin hacer ruido, como los gatos callejeros del distrito Feryí, en Koras. Son habilidades que habéis desarrollado en Uhdanfiún y gracias a ellas parecéis fantasmas avanzando en un fúnebre cortejo.</p>
  
    <p>Captas una presencia a tu espalda que te observa y te giras instintivamente, parándote por un instante. ¿Tríane? No consigues avistar nada. Cuando reanudas la marcha, ves que el grupo está a unos veinte metros ante ti y te dispones a acortar esa distancia, pero de pronto algo llama tu atención.</p>
  `,
    actions: [
      {
        id: `111`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `04`,
    html: `<p>El grupo está a unos cien metros por delante. Examinas el recorrido que están realizando a la vez que observas los alrededores, buscando alguna posición ventajosa para seguirles sin ser descubierto, cuando algo te llama la atención.</p>

    <p>Te ha parecido ver algo en movimiento en el extremo opuesto de la ladera por donde está avanzando el grupo de Deilos. Acechas con cuidado, escrutando todos los recodos del paisaje, al otro extremo del prado… Te ha parecido ver algo en la ladera que trepa hacia el frondoso y amenazador bosque. No ves nada… esperas unos segundos más. Te dispones a retomar la marcha… ¡Ahora sí! ¡Algo pequeño se ha vuelto a mover entre las sombras de manera casi imperceptible!</p>
  
    <p>Observas en silencio, agazapado contra el suelo, al igual que un felino espiando a su presa. En la lontananza, una pequeña figura se vuelve a mover, ocultándose de nuevo entre malezas. Si no te hubieses percatado con anterioridad serías incapaz de detectarlo ahora.</p>
  
    <p>Alguien o algo se está moviendo en paralelo al grupo. Y por lo que parece, sea quien sea, está solo.</p>`,
    actions: [
      {
        id: `17`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `05`,
    html: `<p>Apenas tienes tiempo de hacer un quiebro de cintura y lanzarte a un lado al intuir el disparo de Merkar. Su flecha sesga la tela de tu jubón y te araña el brazo para perderse luego a tu espalda, mientras das una voltereta rondando sobre tu hombro y desenvainas para encararlo.</p>`,
    actions: [
      {
        id: `192`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `06`,
    html: `<p><i>Has solventado el enigma. Aunque «Delquz» sea un nombre extraño (como Bhiko o Acefir por otra parte), guarda una característica común con los otros dos. Los tres nombres están formados por letras que respetan el orden alfabético. Has descubierto por lo tanto la solución (o has tenido mucha suerte)</i>.</p>

    <p>Avanzas hacia las aguas, custodiado por las tres bellas mujeres. La ninfa rubia te besa mientras deshace el cinto de tu espada. Al notar como se afloja tu cinturón y resbala el arma, coges instintivamente la empuñadura de tu espada. La hoja se libera de la vaina quedando al descubierto. En ese mismo instante, las tres se separan de manera fulminante, abriendo ojos con diminutas pupilas y gritando:</p>
  
    <p>—¡Aleja eso! ¡Ni se te ocurra tocarnos con el metal del cielo!</p>`,
    actions: [
      {
        id: `124`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `07`,
    html: `<p>Has solventado el enigma. «Lamido resol» son palabras muy musicales, ya que todas sus sílabas corresponden a notas: la-mi-do-re-sol. «Mi-re-la» es otra palabra que también tiene esta característica, por lo que has descubierto la solución (o has tenido mucha suerte).</p>

    <p>Sigues aproximándote a las transparentes aguas de la charca, rodeado por las tres doncellas que canturrean junto a ti. La morena te quita el jubón mientras te acaricia el cuello. La pelirroja te desabrocha el cinturón que sujeta la espada. Al notar cómo se resbala el cinto, retienes instintivamente la caída de tu arma, que se desenvaina de ese modo de la funda. Mientras sigues sujetando la espada liberada por la empuñadura, la hoja resplandece produciendo un terrible efecto en las tres mujeres, que se apartan gritando:</p>
  
    <p>—¡Retira ese vil metal de nuestra vista! ¡No te atrevas a tocarnos con el metal del cielo!</p>
  
    <p>Mientras pronuncian horrorizadas esas extrañas palabras, te asombra comprobar que sus pupilas se han contraído de repente y su aspecto ha cambiado radicalmente.</p>
  `,
    actions: [
      {
        id: `123`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `08`,
    html: `<p>Lo cierto es que te gustaría saber en qué consiste la cacería secreta. Se han hecho muchas conjeturas y otros tantos rumores sin fundamento sobre esa misteriosa cacería y ahora se te presenta la ocasión de descubrir la verdad. A pesar de que te cuesta confiar en el arrogante Deilos, es una lástima dejar pasar esta oportunidad. Por otra parte, se te ocurre que puede ser todavía más emocionante seguir al grupo sin ser descubierto… y propiciar de este modo otro encuentro con la misteriosa joven que viste durante tu guardia: Tríane.</p>

    <p>Decides equiparte a toda velocidad. Además de la espada, resuelves tomar prestado el arco y las flechas de Zarenyo, debidamente protegidas para que no hagan ruido. Si vas a emprender esta aventura en solitario, más vale equiparse a conciencia.</p>
  
    <p>Sigues el mismo recorrido que tomó el grupo cuando se despidió de ti y te dispones a seguir su pista, confiando en que los atraparás pronto, teniendo en cuenta que son bastante numerosos y que no parecían tener mucha prisa cuando se fueron. Las tres lunas de Tramórea proporcionan una luz mágica a esta noche tan especial, facilitando la visibilidad en la penumbra.</p>
  
    <p>Una vez fuera del campamento, identificas el rastro de sus pisadas y progresas por un camino que desemboca en una pendiente repleta de matorrales y zarzales, hasta que empiezas a escuchar voces a lo lejos. Al cabo de un rato, logras vislumbrar sus siluetas más adelante. No te parece que estén tomando las adecuadas precauciones para pasar desapercibidos y te choca que no sean más prudentes, sobre todo después de haber sufrido la emboscada en el campamento. Reduces la marcha, sin perderles de vista, extremando las precauciones y avanzando con cuidado por las sombras sin hacer ningún ruido.</p>`,
    actions: [
      {
        id: `93`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `09`,
    html: `<p>Has logrado anticipar correctamente el salto del corueco y te has lanzado hacia delante para ejecutar la Yagartéi bajo su cuerpo en extensión. Sacas instintivamente tu hoja de la vaina y ejecutas de manera impecable un arco con tu espada, notando como tus hombros y muñecas acompañan el movimiento, y como la hoja se abre paso por el abdomen del animal con una leve resist…</p>

    <p>—¡Clonck!</p>
  
    <p>El corueco se ha retorcido rugiendo al notar la hoja en sus carnes y tu espada acaba de chocar con una de sus costillas… metálicas. La vibración del impacto te sacude ambos brazos y el arma te salta de las manos, mientras das una voltereta para esquivar la enorme mole que se te venía encima.</p>
  
    <p>Vuelves a encarar la bestia, pero esta vez estás desarmado y entumecido.</p>
  
    <p>El corueco también se ha girado y te mira con más odio si cabe mientras profiere una especie de bramido ensordecedor que no presagia nada bueno.</p>`,
    actions: [
      {
        id: `164`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `10`,
    html: `<p>Apenas te alejas unos pocos metros y te preparas, cargando tu arco.</p>

    <p>Ves que la muchacha te mira con impaciencia, esperando tu señal.</p>
  
    <p>No quieres cargar con la muerte de un compañero de Uhdanfiún sobre tu conciencia, por muy canalla que sea. Prefieres que se haga justicia. Y vas a intentar que ella no mate a nadie…</p>
  
    <p>Deilos está dando instrucciones a Taifos, para que se acerque a la puerta de la cabaña. Puedes ver con el rabillo del ojo que la chiquilla le está apuntando a él.</p>
  
    <p>Te incorporas rápidamente tensando tu arco y aprovechas tu experiencia como guerrero para disparar antes que ella. Ojalá la buena puntería y la fortuna guíen tu brazo.</p>`,
    random: true,
    actions: [
      {
        id: `121`,
        text: `Continuar`,
      },
      {
        id: `74`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `11`,
    html: `<p>Te das la vuelta y corres hacia ella, para cubrir su huida… y en ese momento sientes como algo te atraviesa la espalda y se abre camino por debajo de tu omoplato, rasgando vísceras y alcanzando tu pulmón. Sigues corriendo, escupiendo sangre con el esfuerzo.</p>

    <p>Detrás de ti se empiezan a oír muchas voces, no solo del grupo, sino también de diferentes chozas de la aldea desde la que os llegan gritos de alarma. Alcanzas a la muchacha cuando estáis llegando prácticamente al bosque; ella parece titubear antes de entrar pero la empujas y os adentráis en la espesura.</p>
  
    <p>Tus piernas a duras penas te sostienen.</p>
  
    <p>Escuchas el grito de Deilos al otro lado del bosque.</p>
  
    <p>—¡Lo pagarás caro, maldito!</p>
  
    <p>Te apoyas contra un olmo de tronco ancho y húmedo. Vuelves a toser sangre…</p>`,
    actions: [
      {
        id: `175`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `12`,
    html: `<p>Al escuchar las palabras del Maestro Turpa, te quedas paralizado y decides dar media vuelta, aprovechando que no se han percatado de tu presencia. Además, por lo que acabas de escuchar, no puedes hablar con Zarenyo puesto que no está consciente.</p>

    <p>Su última frase ha reavivado tu curiosidad por la cacería secreta que está dirigiendo Deilos. Intuyes que podría tratarse de algo que no augura nada bueno. Regresas rápidamente a tu refugio y te equipas a toda velocidad, llevándote la espada, así como el arco y las flechas de Zarenyo, debidamente protegidas para que no hagan ruido.</p>
  
    <p>Tomas la dirección que cogió el grupo cuando se despidió de ti y decides seguir su pista. Bajas durante veinte minutos por breñales, hasta llegar a un sendero que se bifurca; te cuesta descubrir qué dirección han tomado. Parece que el camino de la izquierda se adentra en una frondosa arboleda. El de la derecha desciende por una quebrada.</p>`,
    actions: [
      {
        id: `81`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `13`,
    html: `<p>Te lanzas de nuevo hacia delante con ímpetu y das una voltereta para acabar tras una roca cubierta de musgo. Una piedra vuelve a impactar contra tu parapeto y vuela en mil pedazos. Menuda puntería tienen, piensas. Decides contar hasta tres, antes de volver a salir disparado: 1, 2… 3.</p>

    <p>Al asomarte ves a lo lejos tres figuras que huyen a mucha velocidad. Demasiada incluso. Frenas tu carrera, observando el lugar desde el cual os han tendido la emboscada. Todavía hay piedras en el suelo, de tamaño considerable. Parece que la encerrona estaba planificada a conciencia y sin ninguna intención de culminar un asalto posterior.</p>
  
    <p>Deduces que vuestros atacantes eran pocos pero fuertes, rápidos… y muy certeros.</p>
  
    <p>Escuchas un alboroto más abajo por lo que decides regresar al campamento.</p>`,
    actions: [
      {
        id: `86`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `14`,
    html: `<p>En ese mismo momento todos los lobos ladran ruidosamente y saltan a tu alrededor con actitud amenazadora. El gran lobo de cresta blanca se encara a ti y encoge los morros enseñándote sus terribles fauces. De pronto el lobo negro levanta el hocico. Parece que olfatea el aire y profiere un corto aullido apenas audible. El lobo de cresta blanca, gira velozmente el tronco hacia ese lado y resopla. A lo lejos se oye un rumor creciente que parece acercarse a gran velocidad. Los lobos te ladran y saltan a tu alrededor, encarando en ocasiones hacia el lugar de donde provienen los ruidos que siguen creciendo. Parece que algo muy grande se acerca a gran velocidad.</p>

    <p>El gran lobo de cresta blanca te ladra con insistencia, manteniendo la distancia para evitar el filo de tu espada y finalmente aúlla brevemente, ante lo cual los cuatro lobos que te están rodeando dan media vuelta y salen corriendo.</p>
  
    <p>En un primer momento piensas que has tenido suerte, pero al percibir un nuevo olor, nauseabundo y metálico, adivinas que algo mucho peor se acerca, atraído por el ruido y el olor a carne humana: un corueco.</p>`,
    actions: [
      {
        id: `110`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `15`,
    html: `<p>De pronto, observas como el grupo se detiene y encara un sendero que asciende hacia vuestra posición. A medio camino puedes ver una cabaña aislada del resto que se erige sobre una pequeña loma, rodeada por varios huertos y una pequeña tapia que delimita su terreno. Descendéis reptando por el suelo hasta la tapia y la recorréis hasta un extremo, para posicionaros en el flanco del grupo, respecto a la casa.</p>

    <p>Has reconocido a Deilos que da el alto y reúne al resto del grupo junto a él. También vislumbras con claridad el enorme corpachón de Taifos. Cuando están todos juntos, observas cómo parece producirse un momento de confusión. Las figuras se agitan levemente e incluso una retrocede por el camino. Parece buscar algo.</p>
  
    <p>Tú sabes qué es lo que están buscando. A ti.</p>`,
    actions: [
      {
        id: `135`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `16`,
    html: `<p>El grupo sigue avanzando y no puedes alertarlos sin hacer ruido.</p>

    <p>Al quedarte quieto, ves a lo lejos una pequeña silueta que avanza con cautela, a una distancia equidistante a la del grupo. Puesto que vas el último, retrocedes poco a poco para rezagarte, buscando algún sendero entre huertos para atravesar el pago y acceder a la ladera opuesta con la intención de sorprenderlo por detrás.</p>
  
    <p>A pesar de que la distancia es importante y la noche siempre resulta engañosa, tú jurarías que se trata de un ser más bien pequeño. Has descartado que sea de un animal… ¿quién acecha a estas horas de la noche?</p>
  
    <p>Emocionado, piensas que podría tratarse de una de esas criaturas fantásticas que se rumorea habitan el bosque de Corocín.</p>
  
    <p>Estimulado por tu propia cacería personal, te alejas del grupo y reculas, atravesando con cautela los huertos de las afueras de la aldea para acceder al ribazo opuesto, sin perder de vista al escurridizo personaje. Tienes que prestar mucha atención al fijarte, acechando sus movimientos a la par que reptas hacia él para no perderlo de vista. Tu capacidad de observación se ve sometida a una difícil prueba.</p>`,
    random: true,
    actions: [
      {
        id: `162`,
        text: `Continuar`,
      },
      {
        id: `44`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `17`,
    html: `<p>Ahora distingues a lo lejos como la pequeña sombra avanza con extremada cautela, en paralelo al grupo. Estimulado por este nuevo misterio, optas por tomar un sendero entre huertos que atraviesa el pago y accede a la ladera opuesta; así te podrás situar en su retaguardia, vigilando al grupo al mismo tiempo.</p>

    <p>Aunque hay una distancia importante entre ambos y la noche confunde con facilidad a causa de la penumbra, jurarías que se trata de un individuo pequeño. Descartas de inmediato un niño por la discreción de sus movimientos. Piensas que podría tratarse de algún otro ser, quizá de índole fantástica, como los que se rumorea que habitan el bosque de Corocín.</p>
  
    <p>Estimulado por tu propia cacería personal, atraviesas con suma precaución los terrenos de las afueras del poblado para acceder a la ladera opuesta sin perder de vista al extraño personajillo. Compruebas lo difícil que resulta avanzar y mantener su posición localizada sin que desaparezca entre los matorrales. Empiezas a sospechar que realmente debe ser muy bajito para conseguir escabullirse tan fácilmente. El seguimiento se complica, poniendo a prueba tu capacidad de observación.</p>`,
    random: true,
    actions: [
      {
        id: `161`,
        text: `Continuar`,
      },
      {
        id: `72`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `18`,
    html: `<p>Sospechando que hay algo de cierto en lo que te está diciendo, tensas rápidamente la cuerda de tu arco y aprovechas la experiencia adquirida en Uhdanfuín para disparar antes que la muchacha.</p>

    <p>Vas a intentar evitar una masacre, pero tampoco quieres que muera ninguno de tus compañeros de academia.</p>
  
    <p>Difícil decisión. Haces un tiro rápido e instintivo, esperando tener suerte.</p>`,
    random: true,
    actions: [
      {
        id: `191`,
        text: `Continuar`,
      },
      {
        id: `73`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `19`,
    html: `<p>Ahora el maestro ha cambiado su postura y te mira desafiante con las piernas separadas, apoyando sus puños en la cadera. Al cabo de un segundo, con un veloz movimiento, chasquea los dedos.</p>

    <p>Dos flechas silban en el aire sin que puedas reaccionar. Tus piernas flaquean y miras con asombro como ambos proyectiles se han clavado en tu torso. Caes pesadamente de rodillas, pero no sientes dolor alguno. Tu mirada empieza a nublarse y alcanzas a vislumbrar cómo dos figuras se perfilan delante de ti. Son Merkar y Taifos, que bajan sus arcos y te sonríen cruelmente, cobrándose su ansiada revancha.</p>
  
    <p>La voz de Turpa parece alejarse. No consigues ver al maestro.</p>
  
    <p>—Deshaceos del cuerpo. Mañana anunciaremos la deserción de este infeliz y explicaremos que no pudo aguantar la presión de las enseñanzas de la academia.</p>
  
    <p>La oscuridad se cierne cada vez más sobre ti. Antes de morir, puedes ver como Deilos se acerca y te observa despiadadamente para disfrutar con tu agonía…</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Volver al inicio`,
      },
    ],
  },
  {
    id: `20`,
    html: `<p>Corres hacia la casa totalmente horrorizado intuyendo lo que puede estar sucediendo.</p>

    <p>No puede ser. Son guerreros de Uhdanfiún… no son asesinos despiadados.</p>
  
    <p>Pero un nuevo grito en el interior de la choza te devuelve a la cruda realidad.</p>
  
    <p>Vas a tener que enfrentarte con tus compañeros y solo cuentas con el factor sorpresa…</p>`,
    actions: [
      {
        id: `69`,
        text: `Decides entrar en primera aceleración (Protahitéi)`,
      },
      {
        id: `63`,
        text: `Buscas la espalda de Merkar, que se ha quedado fuera, para sorprenderle`,
      },
    ],
  },
  {
    id: `21`,
    html: `<p class="asangre"><i>Has solventado el enigma. «Bribonzuela» y «Curiosear» son palabras pentavocálicas, es decir, que contienen todas las vocales, al igual que «Ecuación»</i>.</p>
  
    <p>Algo te dice que ese curioso individuo puede saber algo de lo que está ocurriendo. Te acercas en silencio y descubres asombrado que en realidad se trata de una chiquilla que apenas debe tener catorce años. Bajo su capa con capucha, viste con pieles y harapos. Tiene el cabello largo pero parece tan sucio que no aciertas a adivinar el color. Lleva unas calzas que le vienen anchas y un cuerno le cuelga de un cinto hecho con cuerda de esparto. Mientras te habla, saca una flecha de su aljaba y se dispone a cargar su arco.</p>
  
    <p>—Me alegro de no estar sola para plantarles cara. Te he visto bajar desde el bosque. ¿Eres de la aldea o un montaraz?</p>
  
    <p>Su voz es algo ronca, y no se corresponde con su aspecto de niña. Te mira de soslayo y te asombra constatar que su mirada azul es fría como el acero, en comparación a la dulzura de su rostro. Ella también te está examinando con detalle.</p>
  
    <p>—Llevas espada… ¿Eres un rebelde?</p>
  
    <p>Decides obviar las preguntas. Su determinación te intriga.</p>
  
    <p>—¿Qué quieres hacer con ese arco?</p>
  
    <p>—Impedirlo.</p>
  
    <p>—¿El qué?</p>
  
    <p>—Que repitan lo que le hicieron a mi familia. Los asesinaron a sangre fría. ¿Me ayudas o solo has venido a mirar?</p>
  
    <p>Deilos, Taifos y Dahzor se acercan con sigilo a la puerta de la cabaña. Están a poco más de 50 metros y sus siluetas parecen demonios amenazantes.</p>`,
    actions: [
      {
        id: `144`,
        text: `Cargas tu arco como la niña, apuntando hacia el grupo`,
      },
      {
        id: `142`,
        text: `Impides que la niña dispare`,
      },
    ],
  },
  {
    id: `22`,
    html: `<p>Con un poderoso rugido, el corueco se abalanza sobre vosotros. A pesar de tu aceleración, su rapidez te desconcierta y la enorme bestia te cubre por completo lanzando un poderoso rugido.</p>

    <p>En ese momento comprendes la suerte que estás teniendo. El corueco te pasa por encima con la intención de alcanzar a la muchacha que sale huyendo.</p>
  
    <p>Ejecutas la técnica del Yagartéi desenvainando tu espada a la vez que das un tajo ascendente de izquierda a derecha, buscando el abdomen de la bestia. La kisha de tu espada atraviesa unos centímetros de carne y provoca que el corueco herido se encoja en el aire, a la vez que lanza un berrido estruendoso. La hoja que se deslizaba se traba súbitamente con algo metálico y chocas con algo muy duro que te propina una sacudida repentina que te recorre los dos brazos de punta a punta, obligándote a soltar el arma.</p>
  
    <p>El corueco se revuelve en el aire y cae pesadamente sobre el suelo. Pero asombrosamente, se recupera de inmediato y se gira para afrontarte de nuevo. No ves a la muchacha por ninguna parte. No puedes alcanzar la espada, por lo que retrocedes, acercándote al arroyo. Todo parece haber terminado y solo piensas en distraer al corueco el tiempo suficiente con el fin de darle tiempo a ella para escapar.</p>
  
    <p>Te dispones a afrontar la criatura que se acerca lentamente, sin dejar de mirarte. Parece que sus ojos gualdos quieran hipnotizarte antes de volver a atacar.</p>`,
    actions: [
      {
        id: `143`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `23`,
    html: `<p>El corueco salta sobre ti lanzando un poderoso rugido. A pesar de tu aceleración, su velocidad te sorprende y la enorme bestia se te viene encima desde lo alto.</p>

    <p>Instintivamente, das un salto hacia delante para poderte colocar debajo de él. Realizas la técnica del Yagartéi desenvainando tu espada y ejecutas un tajo ascendente de izquierda a derecha, buscando el abdomen de la bestia. Notas como la kisha penetra unos centímetros en la carne y provoca un espasmo de dolor en el corueco, que le hace retorcerse en el aire profiriendo un bramido estridente. La hoja deja de deslizarse y golpea algo metálico en el lugar donde debería haber una costilla, lo que te provoca una fuerte vibración en ambos brazos, desde los hombros hasta la punta de los dedos, como si hubieras golpeado con todas tus fuerzas una columna de piedra maciza. El dolor te hace soltar la espada.</p>
  
    <p>El corueco se ha revolcado en el suelo un instante pero se recobra y te encara nuevamente. Estás desarmado y has retrocedido instintivamente en sentido opuesto, acercándote a la confluencia del prado con el arroyo. No albergas ninguna esperanza, por lo que decides morir junto a la sepultura de tu compañera de aventuras.</p>
  
    <p>El corueco avanza lentamente hacia ti cruzando su mirada fosforescente con la tuya como si quisiera hipnotizar a su presa.</p>`,
    actions: [
      {
        id: `134`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `24`,
    html: `<p>Nervioso a la par que fascinado por tu sorprendente encuentro con Tríane, recorres inquieto el perímetro exterior una y otra vez para intentar volver a verla. Pierdes la noción del tiempo hasta tal punto que te sorprende ver acudir el relevo de tu guardia.</p>

    <p>Cuando te diriges a tu refugio, distingues a cinco siluetas camufladas que están hablando con tu compañero Dahzor. Reconoces de inmediato al corpulento Taifos, la mano derecha de Deilos, un Ibtahán de quinto grado como tú. Deilos es el primero que se gira hacia ti y te sonríe posando su mano sobre tu hombro con falsa actitud condescendiente. Sus dientes brillan en la oscuridad. Todos visten ropajes oscuros y se han manchado las caras con carboncillo, como una avanzadilla de reconocimiento que se camufla antes de una misión de combate. Al acercarte, observas que Dahzor está muy emocionado y que también se está tiznando la cara con madera carbonizada.</p>`,
    actions: [
      {
        id: `94`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `25`,
    html: `<p>Te has quedado tan fascinado por la simetría de su rostro y la armonía de sus facciones que dudas un instante, sin saber qué decisión tomar.</p>

    <p>Escuchas unas palabras en tu mente, que te plantean un acertijo para que puedas tomar la decisión correcta:</p>
  
    <p>«ODIO O CEDO».</p>`,
    actions: [
      {
        id: `96`,
        text: `Piensas que «EXHIBO» puede ser la solución, te acercas a ella con actitud amigable`,
      },
      {
        id: `169`,
        text: `Crees que «FRENO» es la respuesta correcta, desenvainas tu espada`,
      },
    ],
  },
  {
    id: `26`,
    html: `<p>De pronto notas una terrible punzada en el abdomen. Observas tu estómago y ves que una flecha está clavada en tus tripas. Alzas la vista a lo lejos y descubres a Merkar que te mira con asombro después de haber disparado su arco.</p>

    <p>Todo sigue transcurriendo lentamente a tu alrededor; la muchacha grita… demasiado tiempo. Hincas la rodilla en el suelo e intentas seguir sujetando la empuñadura de tu espada.</p>
  
    <p>Entretanto Deilos ha agarrado a la chiquilla por el cuello, que se debate aterrorizada, intentando escapar. Todo se está desvaneciendo a tu alrededor y la oscuridad se cierne rápidamente sobre ti. Lo último que escuchas es la voz de Deilos:</p>
  
    <p>—Voy a divertirme con tu nueva amiga, cretino. Taifos, carga con este imbécil y ocultémonos rápido cerca de ese bosque. Puede que su cuerpo nos sirva todavía…</p>
  
    <p>Se hace el silencio. Has muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `27`,
    html: `<p>—Es una identificación que indica mi graduación…</p>

    <p>—¿Tú también eres un guerrero de Uhdanfiún como ellos, verdad?</p>
  
    <p>No crees que valga la pena contestar.</p>
  
    <p>—No es la primera vez que veo un brazalete como éste… El que lo llevaba me salvó… cuando me iba a violar un grupo como ése.</p>
  
    <p>Señala a Deilos y los suyos que veis marchar a lo lejos, corriendo hacia el desfiladero.</p>
  
    <p>—Y al igual que tú, también iba con ellos.</p>
  
    <p>Turbado por su historia, la contemplas en silencio.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. A pesar de su mirada dura y fría, ves cómo unas lágrimas brotan de sus ojos.</p>
  
    <p>—Dale recuerdos de mi parte cuando lo veas. —Te besa en los labios suavemente—. Se llama Derguín.</p>
  
    <p>Se separa de ti lentamente, dejando resbalar sus manos por tus mejillas. En las suyas, ves cómo resbalan las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Cuando la diminuta figura se pierde entre los cerros, te pones en marcha para llegar cuanto antes al campamento, pensando en lo que te ha dicho.</p>
  
    <p>Te acuerdas muy bien de ese tal Derguín. Él y su amigo Mikhon Tiq fueron severamente castigados y luego expulsados de la academia, hace un año aproximadamente, por enfrentarse a sus propios compañeros. Sonríes al pensar que acabas de hacer algo parecido, mientras apuras el paso.</p>`,
    actions: [
      {
        id: `34`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `28`,
    html: `<p>El grupo sigue avanzando y no puedes alertarles sin hacer ruido. Pero hay sonidos que pueden pasar desapercibidos en la noche… como el ulular de un búho, por ejemplo. Juntas las manos e imitas a la perfección su sonido, como podrías imitar cientos, en base a tus enseñanzas de la academia.</p>

    <p>Bhratar, que va el último, no parece haber reaccionado. Tu imitación debe ser muy buena. Lo repites de inmediato. Ahora sí. Se ha detenido, extrañado por la súbita insistencia del rapaz nocturno y se da la vuelta para ver de dónde viene ese ulular tan persistente…</p>
  
    <p>Se acaba de percatar de tu posición alejada. Le haces una señal con un código que habéis practicado miles de veces. Le muestras una dirección. Bhratar te entiende y avisa al compañero de delante. El grupo se ha detenido. Ves como Deilos abandona la cabeza y acude para saber qué pasa.</p>
  
    <p>Bhratar le explica lo que le has transmitido; observas que Deilos se pone muy nervioso y te mira de refilón. Vuelves a señalarle la posición y le indicas que se trata de un solo individuo.</p>
  
    <p>Deilos reúne al grupo y simulan una pequeña reunión, aprovechando la cobertura para indicarte que lo rodees por detrás.</p>
  
    <p>Retoman la marcha mientras tú retrocedes para capturarlo por detrás. Van prestando atención para detectarlo, pero el misterioso individuo aún ha extremado más las precauciones, hasta el punto que incluso a ti te cuesta distinguirlo en la oscuridad.</p>`,
    actions: [
      {
        id: `131`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `29`,
    html: `<p>No entiendes lo que te está proponiendo. Le cuentas que al llegar al campamento piensas denunciar la infamia de Deilos y su grupo, para que se les aplique el castigo correspondiente.</p>

    <p>—No lo has entendido, muchacho —te contesta con voz clara y serena—. Ellos también lo saben. Acompáñame.</p>
  
    <p>Tríane te precede. Te impresiona comprobar como se desplaza sin hacer el más mínimo ruido. Os infiltráis en el campamento con total discreción y os acercáis a la tienda del maestro Turpa. Del interior surge claramente una conversación con otra persona a la que reconoces de inmediato: es Deilos, que le está informando de lo sucedido.</p>`,
    actions: [
      {
        id: `128`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `30`,
    html: `<p>Empiezas a recitar la secuencia, sin dejar de correr entre chinas y guijarros que vuelan a tu alrededor, cuando de pronto recibes un fuerte golpe por detrás, en plena nuca, y caes de bruces al suelo.</p>

    <p>Eso ha sido un pedrusco de los gordos, piensas, mucho más atontado y dolorido.</p>`,
    actions: [
      {
        id: `129`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `31`,
    html: `<p>Mientras reptas por detrás de la tapia para tomar posición, murmuras la secuencia de letras y números con la que entras en Protahitéi, la primera aceleración. En el mismo instante que terminas de recitarla puedes notar como sube un calor intenso por todo tu cuerpo. Tus músculos lumbares se contraen… y todo se ralentiza a tu alrededor.</p>

    <p>Te incorporas y ves moverse a la chiquilla de manera ralentizada. Le haces la señal y cargas tu arco velozmente.</p>
  
    <p>Ella todavía te está mirando.</p>
  
    <p>Te incorporas por encima de la tapia y apuntas al que está más cerca de la cabaña.</p>
  
    <p>Reconoces al corpulento Taifos, que avanza espada en mano.</p>
  
    <p>Sueltas la cuerda. La flecha vuela hacia él.</p>
  
    <p>Recargas tu arco y apuntas a Merkar que está más lejos y también empuña su arco tensándolo desde la cintura mientras mira hacia los lados.</p>
  
    <p>Sueltas tu segunda flecha. Por el rabillo del ojo ves que ella ya tensa su arco y se dispone a disparar.</p>
  
    <p>Tu primera flecha se clava en la pantorilla de Taifos que grita al sentir el impacto.</p>
  
    <p>Te llevas el cuerno a la boca y soplas con todas tus fuerzas.</p>
  
    <p>Tu segunda flecha roza la nalga de Merkar, arrancándole un gruñido de dolor.</p>
  
    <p>Se le dispara el arco y su flecha se pierde en el huerto vecino.</p>
  
    <p>Cargas una tercera flecha.</p>
  
    <p>Apuntas de nuevo pero constatas que no todo se mueve con lentitud. Alguien corre hacia vosotros a toda velocidad. Es Deilos, que también a entrado en Protahitéi.</p>`,
    actions: [
      {
        id: `71`,
        text: `Decides disparar tu tercera flecha`,
      },
      {
        id: `115`,
        text: `Prefieres soltar el arco y desenvainar la espada`,
      },
    ],
  },
  {
    id: `32`,
    html: `<p>Cuando la pequeña figura se pierde entre los cerros, inicias la marcha bordeando el bosque de Corocín y empiezas a subir por la quebrada que lleva al campamento dispuesto a afrontar tu destino. En un oscuro recodo del camino, notas una extraña presencia en las sombras. Te pones a la defensiva ante cualquier peligro inminente, temiendo incluso haber sido sorprendido por Deilos y su pandilla, cuando se avanza una esbelta figura de pelo oscuro y ojos rasgados.</p>

    <p>Es Tríane, que te mira con una extraña compasión en los ojos.</p>
  
    <p>—A veces las buenas intenciones no son suficientes. Me has defraudado.</p>
  
    <p>No entiendes lo que te está proponiendo. Le cuentas que al llegar al campamento piensas denunciar la infamia de Deilos y su grupo, para que se les aplique el castigo correspondiente.</p>
  
    <p>—No lo has entendido, muchacho —te contesta con voz clara y serena—. Ellos también lo saben. Acompáñame.</p>
  
    <p>Tríane te guía atravesando senderos invisibles hasta llegar al campamento. Te impresiona comprobar que ella se desplaza sin hacer el más mínimo ruido. Os infiltráis en el campamento con total discreción y os acercáis a la tienda del maestro Turpa. Del interior surge claramente una conversación con otra persona a la que reconoces de inmediato: es Deilos, que le está informando de lo sucedido.</p>`,
    actions: [
      {
        id: `133`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `33`,
    html: `<p>Estás regresando de vuelta al campamento, avanzando a paso ligero por los términos del bosque, seguido de la extraña muchacha que acabas de conocer. Jadea detrás de tuyo, pero no se queja. Por la ladera opuesta observas cómo el grupo sigue huyendo desordenadamente… hasta que se detiene, poco antes de llegar a la loma de la alameda. Parece que uno ellos os ha descubierto y el grupo señala en vuestra dirección.</p>

    <p>De repente, parte del grupo cambia de sentido y avanza hacia vosotros.</p>
  
    <p>La muchacha se sorprende cuando te detienes y busca el motivo de tu repentino interés. Ahora se acaba de dar cuenta.</p>
  
    <p>—¿Qué hacemos?</p>
  
    <p>Detectas angustia y miedo en su tono.</p>
  
    <p>—Meternos en el bosque.</p>
  
    <p>—Ese bosque es muy peligroso —te dice ella resoplando.</p>
  
    <p>—¿Prefieres enfrentarte a ellos?</p>
  
    <p>La coges por la mano y avanzáis con algo de aprensión hacia la espesura.</p>`,
    actions: [
      {
        id: `46`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `34`,
    html: `<p>Temes no poder adelantar a Deilos y los suyos, por lo que seguramente Dahzor se percatará de tu ausencia en el refugio y despertarás sospechas en el grupo a raíz de lo ocurrido.</p>

    <p>Inicias la marcha bordeando el bosque de Corocín y empiezas a subir por la quebrada que lleva al campamento, sabiendo que el grupo te precede. En un oscuro recodo del camino, notas una extraña presencia en las sombras. Te pones a la defensiva ante cualquier peligro inminente, temiendo incluso ser sorprendido por Deilos y su pandilla, cuando se avanza una esbelta figura de pelo oscuro y ojos rasgados.</p>
  
    <p>Es Tríane, acompañada de un extraño caballo.</p>
  
    <p>—No me has defraudado y por este motivo te voy a prestar excepcionalmente la ayuda que necesitas. <i>Riamar</i> accede a llevarte hasta tu campamento por un atajo, para que nadie descubra lo que has hecho. Será nuestro secreto.</p>
  
    <p>Ignoras como ha conseguido persuadirte, pero al poco rato estás subido en el lomo de ese extraño y hermoso caballo blanco de remos largos y cabeza orgullosa que emite un suave gorjeo cuando Tríane le susurra unas palabras acariciándole el cuello. El extraño animal franquea los obstáculos con una velocidad y agilidad sorprendentes.</p>
  
    <p>En apenas unos minutos, tu peculiar montura se detiene en lo alto de una loma. Tu mirada se posa abajo y vislumbras el campamento. Desmontas con cuidado y te despides del bello animal, sin poder recordar su nombre.</p>
  
    <p>Te internas en el campamento con sigilo. No hay indicios de que Deilos y los suyos hayan regresado todavía.</p>`,
    actions: [
      {
        id: `188`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `35`,
    html: `<p>Sujetas con decisión la empuñadura de tu espada, esperando el salto del corueco.</p>

    <p>Aunque realices el movimiento de manera impecable, te resulta imposible predecir la velocidad exacta de este extraño animal. Tu vida pende de un hilo y lo sabes. Intentas no perder la concentración. Las pupilas de la bestia se contraen una milésima de segundo…</p>
  
    <p>¡El horripilante corueco salta velozmente sobre ti!</p>`,
    random: true,
    actions: [
      {
        id: `181`,
        text: `Continuar`,
      },
      {
        id: `09`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `36`,
    html: `<p>Te adentras entre los árboles, tomando la dirección opuesta de Taifos, con la intención de desahogarte antes de empezar la misteriosa «cacería secreta». Te internas algo más en la espesura, mientras reflexionas sobre lo que acabas de ver. ¿Una aldea con huertos? ¿Acaso la cacería va a consistir en robar animales de granja a unos pobres campesinos? Agachas la cabeza y terminas lo que estás haciendo, sintiendo un leve escalofrío por el súbito cambio de temperatura corporal.</p>

    <p>Al levantar la vista, casi te caes del susto. Ahogas un improperio y te tapas las vergüenzas precipitadamente. Tríane está plantada ante ti, a un metro y medio de distancia y te sonríe con la misma calma que la última vez que os visteis.</p>
  
    <p>—Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…</p>
  
    <p>Esta conversación por enigmas te está exasperando. Te dispones a hacerle preguntas claras, cuando a tu espalda escuchas el sonido de las ramas al agitarse y escuchas la voz de Tauldos:</p>
  
    <p>—¿Tienes para mucho? Tenemos que seguir…</p>
  
    <p>—Voy —le contestas de inmediato.</p>
  
    <p>Te vuelves hacia Tríane, pero ya no está. Lo ha vuelto a hacer otra vez.</p>
  
    <p>Regresas con los demás.</p>`,
    actions: [
      {
        id: `03`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `37`,
    html: `<p>Mantienes la posición sin dejar de observar los movimientos del grupo. Todos, salvo Dahzor, parecen ahora más concentrados. Por lo que parece, la cacería es inminente, pero no alcanzas a entender lo que va a ocurrir. ¿Una aldea con huertos? ¿Acaso la cacería va a consistir en robar hortalizas o animales de granja a unos pobres campesinos?</p>

    <p>Al rato aparece Taifos, reuniéndose nuevamente con el grupo. Reemprenden la marcha, esta vez con sigilo, adentrándose por el sendero que va hacia la aldea.</p>`,
    actions: [
      {
        id: `147`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `38`,
    html: `<p>En ese mismo momento Taifos se queda paralizado; puedes ver la perplejidad reflejada en su cara y te señala repentinamente gritando:</p>

    <p>—¡Cuidado! ¡Detrás de ti!</p>
  
    <p>Apenas has ladeado la cabeza cuando el silbido de una flecha precede el roce del proyectil que pasa junto a tu cuello. Es la muchacha, erguida a pocos metros detrás de ti, que acaba de disparar su arco. Su capucha se ha retirado por el viento y ves su larga melena oscilando en el aire.</p>
  
    <p>Taifos comprende con el tiempo justo que la flecha va dirigida a él y apenas tiene tiempo de tirarse a un lado para esquivarla. Deilos también se agacha instintivamente a pesar de estar al otro lado de la puerta, pero Dahzor es incapaz de eludir la flecha que se le clava en la cadera y profiere un alarido, rodando a continuación por los suelos.</p>
  
    <p>Los demás, algo más alejados, todavía buscan a los asaltantes cuando de pronto suena un cuerno en todo el prado.</p>
  
    <p>Estás anonadado mirando a la chiquilla que suelta su cuerno y empieza a huir ladera arriba, cuando escuchas el griterío a tu alrededor: voces de alarma en las cabañas colindantes, Dahzor aullando por los suelos… y Deilos vociferando:</p>
  
    <p>—¡Atrapad a esa zorra!</p>
  
    <p>Puedes ver cómo Taifos se está incorporando mientras farfulla una secuencia de números que reconoces de inmediato: está entrando en Protahitéi, la primera aceleración.</p>
  
    <p>Rápidamente, haces tus cálculos. La chica está corriendo ladera arriba pero no conseguirá escapar de Taifos, que la atrapara antes de que llegue al bosque. Tú también recitas la secuencia y la persigues, aprovechando tu posición aventajada para llegar antes.</p>`,
    actions: [
      {
        id: `201`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `39`,
    html: `<p>La enorme bestia se abre paso entre la espesura. Es impresionante y mucho más grande que un jabalí… quizá tenga el tamaño de un oso inmenso. Contemplas hipnotizado cómo se le hincha el abombado tórax mientras se apoya en su largos brazos. Su cabeza está coronada por una cresta de hueso y no te quita ojo; notas cómo se clavan en ti sus crueles ojos amarillos. Las piernas cortas y musculosas se están tensando, parece que se dispone a saltar. Encojes aún más tu postura para cubrirte mejor.</p>

    <p>Es la primera vez que te enfrentas a un corueco y seguramente no vivirás para contarlo. Recuerdas ciertos rumores que aseguran que su único punto débil es un reducido espacio ubicado en su abdomen. Esperas que esa teoría sea cierta, ahora que te dispones a afrontarlo.</p>`,
    actions: [
      {
        id: `153`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `40`,
    html: `<p>—Sospecho que debe tratarse de algún asunto importante. Te conduciré hasta la salida del bosque. Sígueme.</p>

    <p>Linar te precede dando grandes zancadas, recorriendo un camino que se te antoja inexistente. Tienes que correr para no perderle. A lo largo del recorrido, te parece entrever extrañas sombras de bestias ocultas en la espesura, pero no se produce ningún percance. Te da la sensación de que Linar es el amo y señor de este viejo bosque. La densidad de la arboleda es tal que parece que se cierra a tu paso, imposibilitando seguir un rastro en condiciones. No te cabe duda que el lugar es mágico.</p>
  
    <p>Sigues trotando detrás del incansable mago; a pesar de que parezca un viejo, constatas que tiene una resistencia asombrosa. Cuando por fin se detiene, te muestra un grupo de robles centenarios que parecen formar una pared impenetrable.</p>
  
    <p>—Nuestros caminos se separan aquí —te dice Linar con voz grave—. Yo regreso a mi santuario. Te deseo la misma fortuna que la que tuviste cuando le plantaste cara al corueco. Tuviste suerte de que no fuera un ejemplar adulto, pero aun así no desmerece en absoluto tu hazaña. Adiós muchacho.</p>
  
    <p>El mago se interna en el bosque y se desvanece en la tupida arboleda.</p>
  
    <p>Al llegar junto a los árboles vislumbras el paisaje que se extiende fuera del bosque de Corocín. Reconoces el final del camino que empezaba en un desfiladero, un montículo con una alameda y al final de ese sendero se adivinan los pequeños pagos, rodeados por huertos.</p>`,
    actions: [
      {
        id: `103`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `41`,
    html: `<p>—Pareces tener motivos justificados para no demorarte. Te guiaré hasta la salida de Corocín.</p>

    <p>Linar se adelanta y empieza a caminar dando grandes zancadas que te obligan a trotar para no distanciarte de él. Se desplaza con soltura por senderos que no logras vislumbrar y al avanzar dejáis atrás a criaturas que se ocultan en la espesura, sin atreverse a interrumpir vuestra progresión. Jurarías que el extraño mago tiene una estrecha relación con el bosque y es respetado por todos sus habitantes. Cuando echas la vista atrás te das cuenta que el sendero que recorréis ha desaparecido tras vuestro paso. Corocín exhuma magia por todos los lados.</p>
  
    <p>El mago sigue avanzando, incansable, lo cual no deja de asombrarte teniendo en cuenta que parece bastante mayor para tener semejante vitalidad.</p>
  
    <p>Linar se detiene finalmente ante unos robles centenarios que se elevan sobre un pequeño montículo.</p>
  
    <p>—Aquí nos separamos. Vuelvo a mi hogar. Espero que tengas suerte en tu búsqueda. La tuviste cuando te enfrentaste al corueco, y aunque no fuera un ejemplar adulto, fuiste valiente. Adiós muchacho.</p>
  
    <p>La voz grave de Linar retumba en tus oídos cuando lo ves desvanecerse en la espesura.</p>
  
    <p>Un estrecho pasadizo oculto entre los robles te permite acceder al exterior del bosque y te devuelve a un paisaje que te resulta muy familiar: el camino previo al desfiladero que termina en la aldea de los campesinos y la pequeña alameda sobre la loma. Avanzas con precaución, explorando las inmediaciones para encontrar a la muchacha.</p>`,
    actions: [
      {
        id: `154`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `42`,
    html: `<p>—Intuyo que debe tratarse de algún asunto importante. Te ayudaré. Sígueme.</p>

    <p>Linar se adelanta y empieza a trotar con largos pasos entre los árboles del bosque sin un rumbo preciso aparente. Te obliga a correr para no quedar rezagado. En la frondosidad que dejáis a los lados, te parece intuir la presencia de espectros que también podrían ser bestias fantásticas ocultas en la penumbra, pero nadie os perturba durante vuestro recorrido, como si el mago fuera el amo y señor de este viejo bosque cuya espesura es comparable a un angosto laberinto. La magia que desprende el lugar es innegable.</p>
  
    <p>Al rato llegáis a un claro y bordeáis un arroyo, dejando a un lado una poza oscura y maloliente.</p>
  
    <p>Linar, que continua avanzando a buen ritmo, te advierte:</p>
  
    <p>—No te detengas y no mires hacia la charca.</p>
  
    <p>Instintivamente, haces todo lo contrario y descubres una extrañas criaturas que parecen emerger del agua. Desconcertado, te ha parecido intuir el cuerpo de una mujer desnuda que se perfilaba en la orilla… ¿Delante de una enorme cola de serpiente?</p>`,
    actions: [
      {
        id: `91`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `43`,
    html: `<p>Recitas velozmente la secuencia de letras y números que te permitirán conseguir la primera aceleración, con la esperanza de que esa velocidad suplementaria te brinde alguna ventaja sobre la colosal bestia que se dispone a atacarte.</p>

    <p>Tus riñones se tensan y notas como tu cuerpo se calienta rápidamente, a causa del apresurado bombeo de toda tu sangre.</p>
  
    <p>Es la primera vez que afrontas un corueco y por lo que tú sabes, nadie ha sobrevivido para contarlo. Esperas que la suerte esté de tu parte; sabes que la vas a necesitar.</p>
  
    <p>El enfrentamiento es inminente.</p>`,
    random: true,
    actions: [
      {
        id: `54`,
        text: `Continuar`,
      },
      {
        id: `183`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `44`,
    html: `<p>De pronto escuchas a tu espalda algo que parece el ulular de un búho. Reconoces de inmediato el sonido como uno de los cientos que habéis practicado en la academia para comunicarse en terreno abierto. Ves que el extraño personaje que estabas siguiendo se ha ocultado inmediatamente. A él tampoco le ha debido convencer la imitación del sonido. Asciendes algo más por la ladera para poder tener a ambos objetivos en tu campo de visión; en ese momento observas que el grupo se ha detenido y que parece estar esperando alguna señal. No están todos.</p>

    <p>Ahora ves a Deilos al otro extremo de la ladera, que ha retrocedido hasta tu posición. Gracias a la refulgencia de las tres lunas de Tramórea y a pesar de la distancia, compruebas que te está viendo y te hace señales, intentando entender lo que estás haciendo. Por sus gestos constatas que está exasperado. Oteas en la otra dirección para ver si tu presa se ha movido. Parece que se arrastra lentamente hacia delante, pero no levanta la cabeza.</p>
  
    <p>Le haces una señal a Deilos con un código que habéis practicado en la academia. Le muestras una dirección. Ves como intenta ver algo sin éxito y te pide confirmación. Vuelves a señalarle la posición y le indicas que se trata de un solo individuo. Le indicas que regrese con el grupo para no alertar al misterioso sujeto que os está espiando.</p>
  
    <p>Deilos te indica que lo rodees por detrás y regresa con el grupo. Retoman la marcha mientras tú te posicionas aún más arriba para que el intruso no te detecte y sin perder de vista su extraña sombra cuando repta por el suelo. Vas a intentar capturarlo por su retaguardia. En el grupo van prestando atención para detectar la singular presencia, pero te das cuenta de que la misteriosa figura aún extrema más las precauciones; incluso a ti te cuesta distinguirla en la oscuridad.</p>`,
    actions: [
      {
        id: `131`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `45`,
    html: `<p>Los lobos se quedan inmóviles, olfateando el aire. La muchacha se derrumba y respira con dificultad, intentando recuperarse.</p>

    <p>El lobo negro profiere un corto aullido apenas audible. El lobo gris de cresta blanca se acerca junto a él y gruñe en tono bajo. Los cuatro lobos, inquietos, quieren reanudar la marcha, pero la muchacha todavía se está reponiendo y aún no tiene fuerzas para levantarse. Te das cuenta de que el lobo negro está muy crispado y no deja de mirar hacia su lado, con una postura cada vez más hostil. En ese momento escuchas a lo lejos un ruido opaco que se aproxima.</p>
  
    <p>Los lobos están cada vez más inquietos y el jefe de la manada se tiene que imponer para que mantengan la calma y permanezcan en sus puestos. Intercambian un aullidos roncos, seguidos de breve gañidos.</p>
  
    <p>En ese momento, los dos lobos se colocan al lado del negro, y el gran lobo gris ocupa el centro; todos están alertas y encarando el bosque desde donde proviene el sordo clamor que crece en intensidad.</p>
  
    <p>El jefe de la manada, sin dejar su posición, se gira hacia vosotros y os ladra con exasperación varias veces, mostrando sus afilados colmillos. Y de golpe, salta al frente y se internan en el bosque enfrentando el peligro inminente. Los tres lobos restantes le siguen de cerca, con un semblante siniestro. Tú percibes por primera vez un olor desagradable con exhalaciones metálicas que te recuerda los rumores escuchados sobre cierta terrible criatura.</p>
  
    <p>—¿Y ahora que pasa? —dice la chiquilla intentando respirar con normalidad.</p>
  
    <p>—Creo que se van a enfrentar a algo terrible para protegernos: un corueco. Huyamos de aquí.</p>`,
    actions: [
      {
        id: `130`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `46`,
    html: `<p>Los lindes del bosque son tan densos y tupidos como lo parecían desde lejos. Inspiran mucho respeto… y temor. Notas que la chiquilla aumenta la presión de su mano mientras os internáis entre fresnos, olmos y robles que parecen milenarios. Con un hilo de voz y carraspeando previamente, la muchacha te confiesa:</p>

    <p>—Nunca me he atrevido a entrar en el bosque de Corocín, ni siquiera de día.</p>
  
    <p>Os detenéis un momento para saber si Deilos y el resto del grupo os está siguiendo. Se oyen voces de alarma a lo lejos pero no parece que el grupo se haya atrevido a penetrar en la espesura.</p>
  
    <p>Ella retoma la conversación. Parece que el escuchar su propia voz le ayuda a temperar su creciente miedo.</p>
  
    <p>—Según dicen, en este bosque habitan bestias de todo tipo, desde lobos salvajes hasta basiliscos o serpientes bípedas… y sobre todo, es temido por sus coruecos.</p>
  
    <p>—Y ¿qué hay de cierto en todas esas leyendas?</p>
  
    <p>—No lo sé, pero el bosque se llama Corocín por ese motivo: es el bosque de los coruecos.</p>`,
    actions: [
      {
        id: `106`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `47`,
    html: `<p>Estáis avanzando sin dejar de controlar a las seis figuras camufladas que serpentean entre huertos y cercados.</p>

    <p>La chiquilla se ha colocado a tu lado y te observa de soslayo sin perderlos de vista.</p>
  
    <p>—Vas bien armado… y supongo que sabes que no se permiten las armas en esta región. ¿Qué eres? ¿Un montaraz solitario o un guerrero rebelde?</p>
  
    <p>No sabes qué contestar… escuchas en tu mente unas palabras, la voz Tríane retumba en tu cabeza: «Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…».</p>
  
    <p>—Hablaremos de eso más tarde. Ocupémonos de ellos antes.</p>
  
    <p>Retomáis la marcha, recuperando terreno sobre el grupo para poneros casi a su altura, separados por las cabañas de los campesinos.</p>
  
    <p>Tal como intuías, se dirigen a la cabaña más alejada. Observas cómo se detienen un momento para parlamentar y encaran el sendero que asciende hacia la choza de la loma, acercándose por los márgenes del huerto principal.</p>
  
    <p>Aprovecháis vuestra ventajosa posición para descender y ocultaros detrás de la tapia, de manera que podáis sorprenderlos desde uno de sus flancos.</p>
  
    <p>A medida que el grupo asciende, puedes reconocer a sus integrantes: el más fuerte, Taifos, va delante seguido por Deilos. Un poco más atrás siguen Tauldos, Bhratar y Dahzor. Cierra la marcha Merkar, que avanza con el arco a medio tensar desde la cintura.</p>
  
    <p>La muchacha se encoge para quedar oculta tras la tapia.</p>`,
    actions: [
      {
        id: `196`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `48`,
    html: `<p>Permaneces un tiempo inmóvil. El bosque está en silencio, como si presentara sus condolencias por el triste e injusto fallecimiento que se acaba de producir en sus dominios. No te llega ningún sonido del exterior, no escuchas nada. Tampoco hay señales de que Deilos y los suyos se hayan atrevido a entrar en el bosque. Transcurre un tiempo sin que te reactives. Sostienes a la chiquilla en brazos con delicadeza, como si solo estuviera dormida, y buscas con la mirada algún lugar donde poder enterrarla. Continúas avanzando por la espesura con dificultad, como un alma en pena.</p>

    <p>De pronto un claro se abre ante tus ojos sin previo aviso. A tu derecha distingues un ligero declive que baja hacia un arroyo. A tu izquierda, entrevés un pequeño prado que despide un aroma penetrante y dulzón. El suelo cerca del arroyo está más blando. Con la ayuda de una piedra, empiezas a cavar una tumba. Al rato terminas y buscas ramas para confeccionar una señal que indique su lugar de descanso. Al buscar entre heléchos, se alzan destellos diminutos de varios colores, entre los cuales predomina el verde. A los brillos fosforescentes se les une un sutil zumbido, parecido al de un canturreo, que rodea la sepultura de la muchacha. Son luznagos, que contribuyen a darle a la ceremonia un aura todavía más fantástica y solemne. Una vez recubierto el cuerpo, colocas una combinación de piedras y ramas a modo de lápida, inclinándote para presentarle tus respetos a la que fuera tu compañera por un breve instante.</p>
  
    <p>Luego te acercas para beber un poco de agua del arroyo, antes de emprender nuevamente la marcha.</p>`,
    actions: [
      {
        id: `90`,
        text: `Quieres avanzar bordeando el arroyo`,
      },
      {
        id: `158`,
        text: `Prefieres atravesar el pequeño prado`,
      },
    ],
  },
  {
    id: `49`,
    html: `<p>Abandonas discretamente y en silencio el campamento, dejando atrás a todos tus compañeros de armas. Rastreas el lugar donde viste por última vez a la chiquilla, en busca de alguna pista de tu compañera de aventuras en el bosque de Corocín.</p>

    <p>Estás arrodillado examinando una pisada cuando de repente notas una presencia a escasos metros que te sobresalta. Tríane se acerca y te pone una mano en el hombro, acariciándote la cabellera. Una vez más, no la has escuchado aproximarse. Sus esperanzadoras palabras te infunden algo de sosiego.</p>
  
    <p>—No te queda otra alternativa que convertirte en fugitivo. Pero no temas, se avecinan tiempos revueltos en los que puedes culminar hazañas gloriosas y conseguir poder. Y si quieres seguir conociendo los secretos del Tahedo, ten paciencia y busca a un guerrero llamado Kratos May.</p>
  
    <p>Adviertes cómo sus delicados y suaves dedos se deslizan por tu brazo hasta llegar a tu mano. Su nívea piel contrasta con tu curtido y rugoso pellejo de color cuero, tu brazo peludo y tus uñas sucias. Quieres mirarla a los ojos una vez más… pero ya no está.</p>
  
    <p>Miras a tu alrededor, te encoges de hombros y te alejas por un sendero entre árboles. Estás pensando que vas a ocultarte durante tiempo en Ritión. Zarenyo te contó que habían lugares fantásticos allí y siempre quisiste vivir junto al mar. Con un poco de suerte os encontraréis por ahí y le podrás explicar lo sucedido esta noche. Miras a lo lejos… y descubres que apenas doscientos metros delante de ti, una pequeña figura con un arco en la espalda se aleja con lentitud y cabizbaja. Una sonrisa tonta te brota en los labios.</p>
  
    <p>«Quizá no haga el viaje solo», piensas.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `50`,
    html: `<p>Cierras los ojos y empiezas a subvocalizar velozmente letras y números para entrar en primera aceleración, notando cómo se te tensionan tus lumbares y una corriente cálida recorre todo tu cuerpo. Al abrirlos nuevamente, percibes que el universo parece haber frenado su curso.</p>

    <p>Todavía no ha salido la flecha del arco de la muchacha cuando tú le arrebatas el cuerno del cinto y lo soplas con fuerza, propinándole un pequeño empujón. Su flecha describe un arco mientras entonas un agudo lamento con el cuerno, deformado por tu aceleración. El grupo de Deilos se ha quedado paralizado (y no solamente por la sensación que te provoca la Protahitéi). Sueltas el cuerno.</p>
  
    <p>Ahora, tensas tu arco y arrojas una primera flecha desde la tapia.</p>`,
    actions: [
      {
        id: `203`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `51`,
    html: `<p>Antes de sucumbir al encanto de las tres hermosas mujeres, intentas discernir qué insólita magia puede flotar en el ambiente, provocando esas visiones y extrañas melodías. Puedes percibir que algo misterioso está ocurriendo y confías en tu percepción para desentrañar lo que puede estar pasando.</p>

    <p>Dos palabras te vienen a la mente, para facilitarte la señal que buscas: «Lamido resol». Las tres mujeres te siguen fascinando y te resulta cada vez más difícil permanecer impasible.</p>`,
    actions: [
      {
        id: `07`,
        text: `«Mírela» es la palabra que te inspira`,
      },
      {
        id: `185`,
        text: `«Escúchela» es la palabra que te gusta`,
      },
    ],
  },
  {
    id: `52`,
    html: `<p>Corres a toda velocidad en dirección opuesta y al rato escuchas a tu espalda ladridos y un rugido ensordecedor. Intentas acelerar pero apenas te quedan fuerzas. Golpeas ramas y zarzas que te hieren en el rostro y en los brazos a tu paso, pero procuras no detenerte. Cuando crees que ya te has alejado lo bastante, te detienes extenuado y resoplas contra un viejo olmo, intentando recuperar el aliento.</p>

    <p>Respiras con fuerza para aliviar la quemazón que notas en los pulmones.</p>
  
    <p>Y de súbito, lo vuelves a oler. Ese pestilente efluvio con reminiscencias metálicas.</p>
  
    <p>No puede ser. Debe ser otro. Y ha olido tu sangre.</p>
  
    <p>Desenvainas la espada, dispuesto a afrontar el peligro.</p>`,
    actions: [
      {
        id: `110`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `53`,
    html: `<p>A pesar del miedo que te inspiran estas bestias, hay algo que no te encaja en su comportamiento. Intentas advertir el detalle que te permita descubrir qué puede ser. En ese momento, el jefe de la manada avanza, acercándose a ti. Su pezuña es casi del tamaño de tu cabeza. La chica se está poniendo nerviosa y agarra con crispación su arco. Su voz se ha quebrado y apenas puedes oírla cuando te dice:</p>

    <p>—Ag, el lobo llega.</p>
  
    <p>La respuesta adecuada a esa frase te dará la solución.</p>`,
    actions: [
      {
        id: `88`,
        text: `decides contestar «Solos»`,
      },
      {
        id: `112`,
        text: `contestas «Zarpa»`,
      },
    ],
  },
  {
    id: `54`,
    html: `<p>El corueco salta hacia ti.</p>

    <p>Tú das un brinco hacia delante, seguido de una voltereta con la esperanza de situarte detrás de él, pero compruebas algo tarde que su velocidad es pasmosa, incluso estando tú en segunda aceleración.</p>
  
    <p>Terminas tu maniobra desenfundado el arma para protegerte. El cuerpo del animal te envuelve prácticamente y lanzas un tajo desesperado para sacarte de encima tan tremenda mole. Tu kisha ejecuta una arco bajo su cuerpo y notas cómo se hunde levemente en su abdomen… para acabar golpeando algo metálico. La sacudida del impacto te hace soltar el arma y notas un latigazo en todos los músculos, desde el hombro hasta la punta de los dedos.</p>
  
    <p>El corueco también parece haber reaccionado. Profiere un rugido estremecedor y da un sorprendente brinco como si de un gato rabioso se tratase, para acabar sobre sus patas nuevamente, encarándote con una mirada amenazadora.</p>
  
    <p>Vuelves a afrontar la bestia totalmente desarmado. Te planteas huir, pero estás totalmente convencido que el corueco te dará alcance.</p>
  
    <p>Intuyendo tu pánico, la espantosa bestia profiere otro bramido ensordecedor que no presagia nada bueno.</p>`,
    actions: [
      {
        id: `164`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `55`,
    html: `<p>Un impacto en el pecho te detiene en seco. Caes de rodillas al suelo, sujetando la flecha que se ha clavado en tu pulmón, cerca del corazón.</p>

    <p>Merkar balbucea tu nombre asombrado, cuando de pronto una flecha silba, se clava en su hombro y lo derriba.</p>
  
    <p>Entre brumas, escuchas cómo salen de la casa Deilos y el resto del grupo. Suena un cuerno, se escuchan voces de alerta. Taifos agarra a Merkar, se lo carga a la espalda y sale corriendo detrás de Deilos que vocifera al resto del grupo:</p>
  
    <p>—¡Corred, idiotas!</p>
  
    <p>Se oyen más voces. Parece que están dando la alarma en la aldea. El grupo se pierde en un horizonte de niebla que no alcanzas a entender. De pronto notas un brazo que te sujeta y te intenta levantar a duras penas. Es la chiquilla que te arrastra como puede fuera de la casa, empujándote por encima de la tapia y llevándote hasta los lindes del bosque. Abajo los campesinos gritan y lloran al comprobar la carnicería que se ha cometido en la casa de uno de sus vecinos, señalando al grupo que huye hacia el desfiladero.</p>`,
    actions: [
      {
        id: `184`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `56`,
    html: `<p>Ya recuperado, te dispones a emprender la marcha para salir de Corocín. Vas detrás del mago por senderos invisibles que no serías capaz de atisbar. A pesar de su edad, el mago avanza con grandes pasos y te obliga a corretear para mantener su zancada. Al rato te das cuenta que estás totalmente perdido y de no ser por Linar, no sabrías qué dirección tomar. Aún te estás preguntando a qué distancia podéis estar cuando Linar se detiene de pronto y te muestra un grupo de robles centenarios que se erigen frente a vosotros, bloqueando el paso.</p>

    <p>—Aquí nos despedimos —te dice Linar en voz baja—. Vuelvo a mis dominios y espero que tengas toda la suerte que te mereces, muchacho.</p>
  
    <p>El trayecto se te ha hecho muy corto y te sorprende que pueda haber un atajo para semejante distancia. Observas al mago alejarse entre los árboles y te da la sensación de que a su paso se van cerrando los accesos… hasta que desaparece de tu vista en la frondosa arboleda.</p>
  
    <p>Cuando te acercas a los árboles descubres un estrecho pasadizo entre troncos que te lleva hasta los lindes exteriores del misterioso bosque de Corocín. Desde allí puedes escrutar el paisaje y rememorar el camino que has recorrido previamente: el camino donde empieza el desfiladero, que desemboca en los huertos de los campesinos, la pequeña loma con la alameda en la que os detuvisteis antes de que descubrieras a la chiquilla…</p>`,
    actions: [
      {
        id: `103`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `57`,
    html: `<p>Totalmente regenerado gracias al ágape que te ha ofrecido Linar, emprendéis la marcha hacia los lindes del bosque de Corocín. El viejo mago te precede y recorre senderos imperceptibles con grandes zancadas, apoyando su bastón con decisión. Te ves obligado a trotar para no perder su paso.</p>

    <p>Al poco rato desistes totalmente de cualquier intento de orientarte en la espesura. Sin embargo, cuando menos te lo esperabas, Linar se detiene y te muestra una apertura entre árboles que desemboca en un descampado. El recorrido te ha parecido excepcionalmente breve pero estás seguro de que serías incapaz de retomar la senda por la que habéis venido. Linar te señala un grupo de robles centenarios apostados sobre un pequeño cerro.</p>
  
    <p>—Aquí nos despedimos, jovenzuelo. Espero que tu destino te sea tan favorable como el encuentro que has tenido con el corueco. —Su voz suena profunda y solemne—. Todo y que no era un ejemplar adulto, demostraste una valentía que merece recompensa. Vuelvo a mis dominios. Buena suerte.</p>
  
    <p>Linar se interna de nuevo en el bosque y desaparece en la negrura del follaje.</p>
  
    <p>Avanzas hasta la arboleda y contemplas el paisaje desde los lindes del bosque de Corocín. Reconoces la ruta que se dirige al desfiladero y a lo lejos vislumbras el monte que precede a la aldea y los huertos de los pobres campesinos.</p>
  
    <p>Inspeccionas por los alrededores con la esperanza de encontrar a la chiquilla.</p>`,
    actions: [
      {
        id: `122`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `58`,
    html: `<p>Todavía te estás preguntando cómo vas a plantear la denuncia de Deilos y los suyos a los maestros cuando, al llegar al perímetro exterior del campamento, escuchas una voz autoritaria que te interpela:</p>

    <p>—¡Alto! ¿Quién va?</p>
  
    <p>Caminas pausadamente y separas los brazos del cuerpo para que te pueda reconocer el centinela. En ese momento, se adelantan dos guardias que se ocultaban en las sombras, para cerrarte el paso. Son Taifos y Deilos. El corpulento Ainari empuña un arco cargado a medio tensar, reteniendo la flecha desde la cintura y apuntado con el arma hacia el suelo. Llevas tu arco a la espalda y sabes que no se dejaran sorprender con una aceleración que ellos también conocen. Aun así, estás dispuesto a enfrentarte a ellos, por lo que te dispones a empuñar la espada.</p>
  
    <p>—Detente, necio.</p>
  
    <p>Reconoces la voz del maestro Turpa, que ahora ves surgir desde las sombras.</p>`,
    actions: [
      {
        id: `149`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `59`,
    html: `<p>Quiebras tu cintura gracias a la velocidad de la primera aceleración y la flecha de Merkar pasa de largo, rozando tu brazo izquierdo. Aprovechas el escorzo para dar media vuelta y salir huyendo. A tu espalda resuena la voz de Turpa gritando: «¡Acabad con él!».</p>

    <p>Asciendes por la loma y distingues a lo lejos la diminuta figura de tu compañera, cargando nuevamente su arco. Aceleras para darle alcance.</p>
  
    <p>Escuchas cómo Deilos y los demás te persiguen, pero prefieres no mirar. Sigues corriendo, cruzándote con una flecha que la muchacha ha lanzado al grupo. Ella también se da la vuelta y empieza a correr. La rebasas y la coges por el brazo aprovechando tu rapidez, para tirar de ella. Al llegar a un talud que desciende, os lanzáis por él. Resbaláis hasta llegar abajo, a unos pocos metros. Cuando os incorporáis de nuevo, temiendo que vuestros perseguidores os estén pisando los talones, echáis un rápido vistazo hacia arriba.</p>`,
    actions: [
      {
        id: `102`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `60`,
    html: `<p>Examinas la herida de Zarenyo. La manga de su jubón está desgarrada y la sangre sale a borbotones por la rotura de la tela. Tu compañero aprieta los dientes cuando cortas la manga y compruebas la gravedad del daño. Está muy pálido. Entiendes el motivo cuando examinas su brazo destrozado por el impacto del afilado pedrusco: tiene el húmero partido.</p>

    <p>Al rato llegan los instructores exaltados, blandiendo sus armas y vociferando para saber si hay algún herido. Al ver el lamentable estado de Zarenyo, el maestro Turpa, máximo responsable de estas maniobras, solicita que se lo lleven de inmediato a la tienda del médico y que si es necesario, lo trasladen mañana mismo a primera hora a Koras para que reciba mayores cuidados. Afortunadamente, es el único herido en todo el campamento y gracias a tu rápida intervención la herida no tendrá mayores consecuencias: solo tiene el brazo roto.</p>`,
    actions: [
      {
        id: `204`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `61`,
    html: `<p>Interpones tu espada cuando Taifos se dispone a atestarte un contundente tajo desde arriba, cortándole el antebrazo con tu hasha. Su corpulencia te ha desequilibrado y te doblas hacia atrás para evitar caerte.</p>

    <p>Taifos maldice entre dientes y te fulmina con sus ojillos de jabalí rabioso.</p>
  
    <p>Te preparas para recibir otra embestida.</p>
  
    <p>—¡Déjalo Taifos! ¡Tenemos que salir de aquí! ¡Ya ajustaremos luego cuentas con él!</p>
  
    <p>Te señala con su espada antes de unirse al grupo, renegando.</p>
  
    <p>—Cuando nos veamos de nuevo, te haré pagar por esto.</p>
  
    <p>El grupo sale corriendo a toda velocidad y empieza a perderse por el camino de la quebrada que lleva hasta el campamento.</p>
  
    <p>Echas un vistazo al interior de la cabaña. A duras penas te contienes para no vomitar ahí mismo. Cuerpos masacrados, degollados, mutilados. Sangre por todas partes.</p>
  
    <p>Oyes la voz de la muchacha, que se incorpora al otro lado de la tapia, haciéndote señas para que te reúnas con ella, gritándote:</p>
  
    <p>—¡Ven! ¡Tenemos que salir de aquí YA!</p>`,
    actions: [
      {
        id: `02`,
        text: `decides seguir a la muchacha y huir hacia los lindes del bosque`,
      },
      {
        id: `126`,
        text: `decides perseguir al grupo`,
      },
    ],
  },
  {
    id: `62`,
    html: `<p>La voz te resulta extraña, una curiosa mezcla entre ronca e infantil. Mantienes tu cuerpo rígido e inmóvil mientras giras lentamente la cara hacia el sonido de la voz que has escuchado. Un bulto oscuro e invisible, perfectamente oculto detrás un desnivel del terreno, te está apuntado con su arco. Lo único que consigues ver es la punta de la flecha que no está en las sombras y apunta directamente hacia ti. No podrías esquivarla a esta distancia.</p>

    <p>—Al principio a ellos… luego a ambos.</p>
  
    <p>—¿Y sabes cuáles son sus intenciones?</p>
  
    <p>—Es lo que intento averiguar.</p>
  
    <p>—Yo te lo puedo decir. Los he visto antes. Son guerreros de Undanfiún. Van a entrar en una de esas chozas para masacrar a la familia que viva dentro… —la voz carraspea— y a lo mejor hacer cosas peores.</p>
  
    <p>Sus palabras te han sacudido como si fueran un mazazo. No logras articular una sílaba.</p>
  
    <p>—Ahora que lo sabes… ¿Me vas a ayudar a detenerlos o te vas a desentender y convertirte en su cómplice?</p>`,
    actions: [
      {
        id: `212`,
        text: `crees que miente y te niegas a prestarle a ayuda`,
      },
      {
        id: `100`,
        text: `aceptas ayudarle`,
      },
    ],
  },
  {
    id: `63`,
    html: `<p>Te dispones a sorprender a Merkar por detrás cuando de pronto una flecha pasa silbando por tu lado y se clava en su omoplato derecho. Merkar aúlla de dolor. En ese mismo momento desenvainas tu espada y le golpeas fuertemente con la empuñadura su antebrazo izquierdo, lo que le hace soltar el arco con otra mueca crispada.</p>

    <p>Encaras la entrada de la cabaña con la espada en alto, sin saber lo que te vas a encontrar dentro.</p>`,
    random: true,
    actions: [
      {
        id: `146`,
        text: `Continuar`,
      },
      {
        id: `125`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `64`,
    html: `<p>Se suman otras voces que provienen de los huertos colindantes.</p>

    <p>«¡Allí van! ¡Fijaos, hay un rezagado!».</p>
  
    <p>En ese momento, escuchas el impacto de un guijarro a tus pies, mientras sigues corriendo. De pronto, te das cuenta que vienen de todas partes, a por ti, armados con aperos de labranza, cogiendo piedras que te lanzan con torpeza… pero ya son más de veinte personas que se te aproximan, rodeándote por todos lados.</p>
  
    <p>Una piedra te golpea en el pecho, sin apenas hacerte daño. Al momento otro canto te atiza de lleno en un pómulo, aturdiéndote por un segundo. Notas la sangre que recorre tu mejilla.</p>
  
    <p>La cosa se está poniendo fea y decides pronunciar la fórmula de la aceleración para salir cuanto antes de este atolladero.</p>`,
    actions: [
      {
        id: `30`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `65`,
    html: `<p>Cuando estás prácticamente sobre él, lanzas el brazo hacia delante y cargas todo tu peso sobre su espalda para amordazarle la boca con tu mano y mantenerle aplastado contra el suelo, tal y como os han enseñado en las técnicas de emboscada de la academia.</p>

    <p>Apenas ha emitido un bufido cuando ha sentido tu presión y lo mantienes totalmente inmovilizado. Tampoco parece que quiera debatirse demasiado. Le das la vuelta lentamente para verle la cara… y alucinas: ¡Es una chiquilla!</p>
  
    <p>Apenas debe tener catorce años. Bajo la capa con capucha, viste con pieles y harapos. Tiene el cabello largo pero parece tan sucio que no aciertas a adivinar el color. Lleva unas calzas que le vienen anchas y un cuerno de caza le cuelga de un cinto tosco hecho con cuerda basta. Un arco corto y su aljaba asoman por su espalda. Tú sigues sin incorporarte, para permanecer invisible.</p>`,
    actions: [
      {
        id: `205`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `66`,
    html: `<p>Sincronizas tu movimiento con sumo cuidado, lanzándote a su espalda y buscando su boca con una mano para evitar que pueda chillar, mientras que con la otra intentas aprisionar sus brazos. Te ha sorprendido la poca resistencia que has notado, por lo que ambos habéis chocado de bruces contra la hierba. La peor parte se la ha llevado él puesto que lo has aplastado literalmente contra el suelo cuando le has caído encima. No ha proferido ningún sonido y ahora notas como resopla por la nariz humedeciendo la palma de tu mano que se aferra a su boca como una tenaza. Está totalmente inmovilizado y dejas pasar un segundo para que asuma su condición mientras le susurras al oído una fanfarronada.</p>

    <p>—No hagas ni el más mínimo ruido o te retuerzo el pescuezo como a una gallina. Asiente lentamente si me entiendes.</p>`,
    actions: [
      {
        id: `213`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `67`,
    html: `<p>Te lanzas sobre su espalda rodeándolo con tus brazos para impedir cualquier reacción. El encapuchado apenas consigue resoplar y su rostro se hunde en la hierba. Le mantienes sujeto de tal modo que le resulta imposible moverse. Constatas que no tiene mucha fuerza, tanto por la poca resistencia que has notado como por la escasa envergadura que tiene. Puesto que no forcejea, decides girarlo para arrancarle la capucha y verle la cara.</p>

    <p>No te lo puedes creer… ¡Es una chiquilla!</p>
  
    <p>Su aspecto es lastimoso; su cara y su pelo están tan sucios que eres incapaz de adivinar el color. Su vestimenta da pena. Por debajo de la capa lleva harapos y pieles, junto con unos calzones que le vienen grandes. Para sujetarlos usa una cuerda de esparto a modo de cinturón, del que cuelga una especie de cuerno de caza. No sabrías darle una edad, pero te parece que debe rondar los catorce años.</p>`,
    actions: [
      {
        id: `210`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `68`,
    html: `<p>Al llegar junto a un grueso fresno, te detienes para recuperarte y poder estudiar el terreno. En ese momento, te das cuenta que ella te está examinando detenidamente: tus ágiles movimientos, tu cuerpo curtido por el ejercicio, tu espada al cinto… tu brazalete con marcas azules.</p>

    <p>—Eres… como ellos.</p>
  
    <p>No sabes qué contestarle. Solo la miras en silencio.</p>
  
    <p>—No exactamente. Ellos mataron a mi familia. Tú me recuerdas al otro.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. A pesar de su mirada dura y fría, ves cómo unas lágrimas brotan de sus ojos.</p>
  
    <p>—Dale recuerdos de mi parte cuando lo veas. —Te besa en los labios suavemente—. Se llama Derguín.</p>
  
    <p>Con una mano acaricia tu mejilla, con la otra se enjuga las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Derguín… te suena mucho ese nombre. De pronto lo recuerdas: es un alumno de la academia al que expulsaron el año pasado después de infringirle un severo castigo. No recuerdas bien el motivo pero te suena que castigaron y expulsaron a su compañero también, un tal Mikhon Tiq.</p>`,
    actions: [
      {
        id: `32`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `69`,
    html: `<p>Murmuras la secuencia de letras y números que te permiten alcanzar la primera aceleración y vas notando una tensión en tu columna vertebral, a la vez que se acelera el bombeo de tu sangre. Todo a tu alrededor transcurre ahora más lentamente.</p>

    <p>Te abalanzas sobre Merkar que todavía se está girando con una lentitud exasperante y le barres ambas piernas, levantándolo del suelo con tu espada envainada, usándola como una remo que se propulsa en las olas. Su cuerpo todavía no ha tocado el suelo que tú ya estás entrando en tromba dentro de la cabaña que despide un extraño olor a sudor y sangre.</p>
  
    <p>Escuchas el sonido opaco (debido a tu aceleración) de la espada de Taifos, segándole la pierna a una mujer que intentaba levantarse; ves cómo las gotas de sangre salpican lentamente la estancia y puedes ver como algunas te llegan al rostro. Dahzor se dispone a ensartar un niño por la espalda cuando éste intenta huir. Afuera, se escucha el sonido de un cuerno de caza que da la alarma. Interpones tu arma y ejecutas un giro de muñeca tan veloz que la espada sale volando hacia una de las paredes.</p>
  
    <p>Y de pronto percibes que a tu espalda alguien se ha movido rápidamente… Es Deilos, que también ha entrado en Protahitéi.</p>
  
    <p>Vas a necesitar mucha suerte para afrontar a un Ibtahán de sexto grado en igualdad de condiciones.</p>`,
    random: true,
    actions: [
      {
        id: `145`,
        text: `Continuar`,
      },
      {
        id: `186`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `70`,
    html: `<p>Observas cómo el grupo se ha dispersado y ocupa diversas posiciones alrededor de la cabaña y el camino. Te parece reconocer a Taifos como el que está más cerca de vosotros y de la cabaña. Se ha puesto en cuclillas, apoyado contra el cercado. Algo más atrás, te da la sensación que se trata de Deilos, por la manera de gesticular. Junto a él distingues a Merkar, con el arco tensado a media cintura. En el sendero parece que Dahzor avanza en dirección a Deilos. Bhratar y Tauldos se han quedado en el cruce cubriendo la retaguardia.</p>

    <p>La chiquilla está esperando tu señal y se muestra cada vez más impaciente a medida que el grupo se acerca a la cabaña. Está tensando su arco y se dispone a apuntar a Taifos. Rápidamente, te llevas el cuerno a la boca y soplas con todas tus fuerzas.</p>`,
    actions: [
      {
        id: `182`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `71`,
    html: `<p>Sueltas la flecha. Deilos la esquiva dando un salto hacia el lado… y entonces te reconoce.</p>

    <p>—¡Tú! —exclama rabioso.</p>
  
    <p>Sin soltar el arco, te abalanzas sobre la muchacha y la agarras por la cintura como si fuera un pequeño fardo mientras ella profiere un breve resoplido. Corres ladera arriba, en dirección al bosque, hostigado de cerca por Deilos que ya se reincorporado y os persigue.</p>
  
    <p>Escuchas voces de alarma que provienen de las diferentes chozas, pero sabes que Deilos no cejará en su empeño tan fácilmente. El peso de la chiquilla que se debate con torpeza te ralentiza y lo tienes casi encima.</p>
  
    <p>Ya falta menos, apenas cien metros. Escuchas resoplar a Deilos a tu espalda… De pronto sueltas a la muchacha y te giras ejecutando un Yagartéi defensivo que sorprende a vuestro perseguidor. Cuando intenta reaccionar, le propinas una patada frontal en pleno tórax que le despide hacia atrás con ímpetu y le hace rodar cuesta abajo.</p>
  
    <p>La chiquilla se ha levantado y se ha quedado perpleja contemplando la escena. La sujetas de nuevo por el brazo y reemprendéis vuestra huida hacia el bosque. Deilos se yergue con dificultad mientras reniega encolerizado:</p>
  
    <p>—¡Te arrepentirás de esto, maldito!</p>
  
    <p>Llegáis a la imponente arboleda, apurando tu aceleración hasta los lindes. Tiene un aspecto amenazador. Avanzas hacia el bosque.</p>
  
    <p>—¿Seguro que es buena idea meternos aquí dentro? —te pregunta resoplando.</p>
  
    <p>—No tenemos otra opción.</p>`,
    actions: [
      {
        id: `46`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `72`,
    html: `<p>Te arrastras zigzagueando como una serpiente para envolver a tu presa y capturarla por detrás. Has logrado distinguir su perfil recortado en la noche por una fracción de segundo. Lleva una capa y una capucha que impide ver su rostro, a su espalda cuelga un arco corto con su aljaba. Por delante y a lo lejos, divisas al grupo que prosigue su avance silencioso.</p>

    <p>Vuelves a fijar la atención en el extraño personaje que estás siguiendo… pero ya no lo ves. ¡No puede haber desaparecido!</p>
  
    <p>Irritado por haberte despistado tan tontamente, avanzas lo más velozmente que puedes sin delatar tu presencia y extremando las precauciones para no hacer ruido… pero sigues sin verlo.</p>`,
    actions: [
      {
        id: `140`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `73`,
    html: `<p>El silbido de tu flecha precede el de la chica, pero no alcanza tu objetivo. Deilos se sobresalta cuando escucha el silbido que le roza las piernas y ve cómo una flecha se clava en el prado a pocos metros de él. En ese mismo instante otra flecha se le clava en el hombro, arrancándole un grito de dolor agudo. Si no se hubiese movido, le hubiese atravesado el corazón.</p>

    <p>Dahzor, que avanzaba por detrás de él, asustado por el ataque, da media vuelta y huye gritando:</p>
  
    <p>—¡Es otra emboscada! ¡Nos estaban esperando, huyamos!</p>
  
    <p>La chiquilla está sorprendida por lo ocurrido y te mira de reojo levantando un ceja con reprobación. Le coges rápidamente el cuerno del cinto aprovechando su confusión.</p>
  
    <p>—¡Rápido! ¡Hay que alertar a los campesinos!</p>
  
    <p>Y te pones a soplar el cuerno con todas tus fuerzas.</p>
  
    <p>Se empiezan a oír gritos en la cabaña y en las chozas de los alrededores, mientras observas cómo el grupo huye corriendo a toda velocidad. Deilos corre sujetándose el hombro con el otro brazo y gruñe de dolor en cada zancada que da.</p>
  
    <p>—Vamos —le susurras suavemente a tu misteriosa compañera—. ¿No querrás que nos sorprendan aquí, verdad?</p>
  
    <p>Corréis agazapados subiendo por la loma hasta los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: `85`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `74`,
    html: `<p>El silbido de tu flecha y tu movimiento brusco han alertado a Deilos, que ha percibido tu sombra al levantarte y se mueve imperceptiblemente para descubrir de qué se trata. El proyectil pasa entre sus piernas y se clava a pocos metros de él, justo delante de Dahzor, que avanzaba por detrás.</p>

    <p>La muchacha dispara un segundo más tarde, desconcertada ya que esperaba tu señal. Su flecha se clava en el hombro de Deilos, arrancándole un gañido de dolor agudo. Si no se hubiese movido, le hubiese atravesado el corazón.</p>
  
    <p>Taifos se ha quedado momentáneamente petrificado, al ver cómo Deilos cae de rodillas y se sujeta el hombro donde tiene clavado la flecha. Luego se lanza hacia él para ayudarle.</p>
  
    <p>En ese momento te llevas el cuerno de caza a los labios para soplar con todas tus fuerzas.</p>
  
    <p>Dahzor da media vuelta y huye gritando:</p>
  
    <p>—¡Es otra emboscada! ¡Nos estaban esperando, huyamos!</p>
  
    <p>Merkar, apostado más atrás carga su arco para proteger la retirada, intentando vislumbrar lo que hay detrás de Dahzor, que viene corriendo hacia él. Puede ver a Taifos cargando son Deilos a hombros y retirándose también, pero no consigue ver quién les está atacando…</p>
  
    <p>La chiquilla está confusa por lo sucedido; te mira de soslayo, alzando una ceja con desaprobación.</p>
  
    <p>Se encienden luces en algunas cabañas del pago y ya se oyen voces de alarma, gritos y llantos por los alrededores. El grupo está huyendo a toda velocidad por el mismo camino que han venido.</p>
  
    <p>Deilos va rezagado, corriendo mientras se sujeta el hombro con el otro brazo, y gruñe de dolor en cada zancada que da.</p>
  
    <p>—Será mejor que nos marchemos de aquí cuanto antes o tendremos problemas, musitas a tu enigmática compañera.</p>
  
    <p>No te contesta, pero adviertes que no parece del todo satisfecha por el reciente desenlace. La invitas a seguirte, sujetándola por un brazo.</p>
  
    <p>Corréis agazapados subiendo por la loma hasta los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: `33`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `75`,
    html: `<p>—Vamos a cerciorarnos —te contesta Linar—. Sígueme.</p>

    <p>Linar se desplaza raudo y con soltura por el frondoso bosque, obligándote a corretear para igualar sus grandes pasos. Avanzáis durante unos minutos hasta que se despeja la espesura y desembocáis de pronto sobre un prado que encara un cerro culminado por un amplio árbol moldeado por cuatro troncos que se unen en uno solo. Cuando os acercáis puedes ver una hendidura en la corteza que da paso a una entrada natural al interior de la casa del mago.</p>
  
    <p>Linar te proporciona comida y agua para que puedas reponer las fuerzas pérdidas en tus recientes enfrentamientos. Al rato compruebas que tu agarrotada musculatura recupera su vigor original, incluso las zonas más doloridas tras el escarceo con el corueco. Sigues a Linar mientras éste asciende por el tronco de su hogar y culmina la copa del ancho árbol que ha apodado el Gran Viejo. Allí se extiende una plataforma natural desde la cual Linar otea los aledaños, buscando a la chica que le has comentado.</p>
  
    <p>Poco después carraspea y te informa:</p>
  
    <p>—Tu amiga está sana y salva, fuera de Corocín. Es muy lista y ha sabido salir ilesa de este peligroso lugar. Normalmente no suelo interesarme por los problemas que me son ajenos pero tu osadía al enfrentarte a ese corueco, aunque no fuese adulto, merece una atención. Si lo deseas, puedo llevarte hasta los lindes de Corocín, para que puedas alcanzarla luego. Cuando acabes de comer, marcharemos. No te demores.</p>
  
    <p>Estás bajando por la plataforma cuando te percatas de que el mago aparta un velo de hojas que parece camuflar un curioso teclado; el mago empieza a pulsarlo y notas que en la madera del árbol se accionan una clavijas que provocan un sonido similar al de un órgano, liberando una música que se puede escuchar en todo el bosque. Es la música de Corocín, supones.</p>
  
    <p>El mago se da cuenta que lo estás contemplado y hace un gesto de complicidad con el hombro mientras sigue tocando.</p>
  
    <p>—Eso tranquilizará a tu amiga —te explica el Mago.</p>`,
    actions: [
      {
        id: `57`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `76`,
    html: `<p>Linar te invita a seguirle. Te colocas detrás de él y empezáis a serpentear por el bosque a través de los árboles sin que exista ningún sendero que os permita orientaros. El mago camina con decisión, dando grandes zancadas que te obligan a trotar para mantener la distancia. Al rato aparecéis en medio de un claro y ascendéis por un cerro coronado por un árbol de tamaño colosal, formado por cuatro troncos que se entrelazan en uno solo. El mago se cuela por una hendidura de la corteza y cuando le sigues descubres que se trata una puerta natural que brinda el acceso a la casa de Linar.</p>

    <p>El peculiar personaje te invita a comer y te sirve un generoso vaso de agua fresca que sabe de maravilla. La pitanza que te ofrece te parece muy sabrosa, por lo que la devoras con apetito, notando cómo recuperas las fuerzas hasta el punto de no notar el agarrotamiento que tenías en los brazos como consecuencia de tu encuentro con el corueco.</p>
  
    <p>Linar asciende por el ancho tronco del árbol que ha bautizado como el Gran Viejo, para alcanzar una plataforma natural que se extiende sobre la copa. Desde allí puedes ver cómo indaga en los alrededores, buscando el grupo que le has descrito.</p>
  
    <p>—Ahem. Allí están. No han entrado en el bosque, aunque te puedo llevar hasta los límites de Corocín para que los alcances. Tengo el presentimiento de que no llevan buenas intenciones, por lo que te aconsejo que tengas cuidado. Sería una lástima que no salieras airoso de esta aventura después de haber sobrevivido al ataque de un corueco, aunque ese ejemplar no fuera adulto.</p>`,
    actions: [
      {
        id: `113`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `77`,
    html: `<p>—Acompáñame —te contesta Linar.</p>

    <p>Linar avanza con pasos largos y decididos entre la espesura y tú a duras penas logras seguir su ritmo. Al rato llegáis a un camino que se abre paso en el bosque, desemboca sobre un prado y finalmente encara una loma, sobre la cual se erige un extraño árbol, formado por cuatro troncos fundidos en uno solo. Lo que parece una hendidura resulta ser una puerta natural que da acceso a la casa de Linar.</p>
  
    <p>El mago te ofrece bebida y alimento para recuperar fuerzas y notas de inmediato cómo tus entumecidos músculos recobran nuevamente la vitalidad, a pesar del reciente enfrentamiento con el corueco. Linar sube por su árbol, hasta llegar a la copa del Gran Viejo, donde se levanta una plataforma natural. Desde ella escudriña los alrededores.</p>
  
    <p>Al cabo de un minuto, carraspea y te dice:</p>
  
    <p>—El grupo que os ha atacado no está en el bosque. Están regresando a su cubil. No suelo mezclarme en asuntos mundanos pero el coraje y la destreza que has demostrado ante el corueco, merece una recompensa. Tuviste suerte que no fuera adulto, pero eso no deprecia en nada tu valor. Te llevaré hasta los lindes del bosque si lo deseas. Acaba de comer y partiremos luego.</p>
  
    <p>Mientras bajas de la plataforma, observas cómo el mago aparta un velo de hojas que oculta un extraño teclado. Cuando el mago lo presiona sientes como unas clavijas que forman parte de la madera del árbol se accionan y suena una música de órgano en todo el bosque.</p>
  
    <p>La música de Corocín.</p>
  
    <p>—Es en homenaje a tu amiga —te explica el Mago—. Para que descanse en paz.</p>`,
    actions: [
      {
        id: `56`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `78`,
    html: `<p>Estás enumerando la secuencia de números y letras de la fórmula secreta mientras te levantas para captar la atención de Deilos. Puedes ver cómo se sorprende y te encara de inmediato, pero en ese mismo instante sientes una terrible punzada en el estómago. Terminas la secuencia, por lo que te invade un repentino calor en todo el cuerpo al tiempo que se tensan tus riñones.</p>

    <p>La flecha que te ha lanzado Merkar está clavada en tus tripas, pero consigues mantenerte en pie. Cometiste un terrible error al no tener en cuenta la presencia de Merkar con su arco preparado.</p>
  
    <p>Aparte de Deilos, todo se ha vuelto más lento a tu alrededor; la chiquilla grita… demasiado tiempo. El arco se te escurre entre los dedos e hincas la rodilla en el suelo, sujetándote la flecha. Tu otra mano agarra la empuñadura de tu espada. Te concentras. Tan solo Deilos se mueve a tu misma velocidad y puedes ver cómo salta por encima de la tapia para sacudirte un tajo de arriba hacia abajo. En ese instante su rostro refleja estupor al reconocerte. Ejecutas de manera impecable un Yagartéi, desenvainando tu espada a la vez que das un tajo ascendente de izquierda a derecha. Vuestras espadas chocan y el arma de Deilos sale volando por encima de tu cabeza.</p>`,
    actions: [
      {
        id: `105`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `79`,
    html: `<p>—Pues el que me ha salvado parecía estar en buena forma. Me dijo que se llamaba… —Intentas acordarte de su nombre pero…—. Vaya, no consigo recordarlo. ¿Y tú cómo has conseguido salir del bosque?</p>

    <p>—No lo sé. Empecé a correr sin parar hasta que ya no pude más. Cuando estuve a punto de rendirme, descubrí este sendero y pude salir. Estaba tan angustiada que apenas podía respirar hasta que me apoyé contra este viejo árbol. Me pareció escuchar una extraña música y me quede sentada aquí hasta que me relajé. Dicen que esa música es del bosque y se oye a veces.</p>
  
    <p>Sonríes una segunda vez y prefieres no explicar de dónde procede.</p>
  
    <p>—¿Qué hacemos ahora? —te pregunta la muchacha.</p>
  
    <p>—Voy a explicar lo ocurrido a nuestros maestros. Reclamaremos justicia para los campesinos y castigo para los culpables.</p>
  
    <p>—¿Estás seguro de que es una buena idea?</p>
  
    <p>—Puedes venir conmigo y te presentaré como testigo.</p>
  
    <p>—Ni lo sueñes. No confío en ellos.</p>
  
    <p>—Entonces, ¿no me acompañas al campamento?</p>
  
    <p>—Solo un tramo del recorrido. Luego nos separaremos.</p>`,
    actions: [
      {
        id: `104`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `80`,
    html: `<p>Le quitas la daga a Bhratar, que todavía gimotea en el suelo y le lanzas con fuerza el puñal a Merkar que en ese momento se dispone a disparar.</p>

    <p>La flecha y la daga se cruzan en el aire. Merkar profiere un aullido de dolor y se sujeta el muslo, con la daga clavada hasta la empuñadura.</p>
  
    <p>Te das la vuelta y corres hacia el bosque; buscas con la mirada a la chiquilla.</p>
  
    <p>Detrás de ti se empiezan a oír muchas voces, no solo del grupo, sino también de diferentes chozas de la aldea que gritan aterrados dando aviso de que están siendo atacados. Alcanzas a la muchacha cuando estás llegando prácticamente al bosque; está tumbada en el suelo con una flecha clavada en la espalda, la coges en brazos y os adentráis en la espesura.</p>
  
    <p>Notas que el cansancio se apodera de ti por el esfuerzo tras la aceleración, pero sigues corriendo.</p>
  
    <p>Escuchas el grito de Deilos al otro lado del bosque.</p>
  
    <p>—¡Pagarás por esto, cobarde!</p>
  
    <p>Estáis en un bosque cerrado y ya no escuchas ningún ruido. Te arrodillas junto a un olmo de tronco ancho y húmedo, tumbando con delicadeza a la chiquilla herida. Ves un hilo de sangre que se le escapa por la comisura de los labios…</p>`,
    actions: [
      {
        id: `174`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `81`,
    html: `<p>Buscas algún rastro que te permita descubrir el camino que haya seguido el grupo. No consigues apreciar ninguna huella o indicio que te ayude a decidir. Antes de dejarlo al azar, decides resolver un problema mental que te aclare las ideas y te ayude a tomar la decisión correcta.</p>

    <p>Recuerdas que en Uhdanfiún, un Tahedorán, maestro del Tahedo en la academia, empezaba sus clases con un ritual de saludos muy concretos. Todos los alumnos se inclinaban ante los demás alumnos, luego ante los Ibtahanes y finalmente ante el maestro. De igual forma, los Ibtahanes se inclinaban ante los demás ibtahanes, luego ante los alumnos y finalmente ante el maestro. Recuerdas igualmente que el número de alumnos duplicaba al de los Ibtahanes, por lo que el ritual precisaba un total de 900 reverencias. Con esa información deberías poder deducir cuantos Ibtahanes y alumnos había en la clase.</p>`,
    actions: [
      {
        id: `151`,
        text: `crees que habían 8 Ibtahanes y 16 alumnos, escoges el camino de a la izquierda y te adentras en el bosque`,
      },
      {
        id: `167`,
        text: `crees que habían 10 Ibtahanes y 20 alumnos, escoges el camino de la derecha hacia el desfiladero`,
      },
    ],
  },
  {
    id: `82`,
    html: `<p>Antes de sucumbir definitivamente al encanto de las tres hermosas mujeres, intentas discernir qué extraña magia puede flotar en el ambiente. Puedes percibir que algo misterioso está sucediendo y confías en tu percepción para desentrañar lo que puede estar pasando.</p>

    <p>Un recuerdo del pasado irrumpe en tu memoria: cuatro nombres de mujeres que conociste en el pasado. Las dos primeras se llamaban «Bhiko» y «Acefir». También recuerdas el nombre de las dos siguientes, aunque sospechas que solo una de ellas te traerá suerte…</p>`,
    actions: [
      {
        id: `06`,
        text: `piensas que «Delquz» es el nombre que te inspirará`,
      },
      {
        id: `190`,
        text: `crees que «Lorean» es el nombre correcto`,
      },
    ],
  },
  {
    id: `83`,
    html: `<p>Piensas que esta chiquilla tiene desvaríos de niña asustadiza y se cree todas las patrañas que le cuentan los campesinos supersticiosos.</p>

    <p>—Lo que acabas de decir es totalmente imposible. Conozco a esos guerreros y son incapaces de cometer semejante atrocidad. Márchate antes de que los avise y te den un castigo por tus injurias.</p>
  
    <p>La muchacha te observa con más detenimiento y se percata que además de la espada, también llevas un brazalete con estrías azules. Con ojos como platos, empieza a retroceder, balbuceando.</p>
  
    <p>—Eres uno de ellos…</p>
  
    <p>—Vuelve a tu casa enana —le respondes irritado.</p>
  
    <p>Ves auténtico terror en sus ojos. Decides que lo mejor es que se vaya, para que puedas seguir al grupo sin distracciones inoportunas. Le das la espalda y sigues arrastrándote mientras observas las evoluciones del grupo.</p>
  
    <p>Siguen avanzando entre los cercados.</p>
  
    <p>«Bobadas», piensas enfadado. Esta cacería secreta te está resultando decepcionante. Al final va a resultar que Deilos y sus patéticos acompañantes van a robar un cerdo o unas gallinas a unos miserables campesinos. Vaya estupidez.</p>
  
    <p>Te vuelves a girar para ver si la chiquilla sigue ahí, pero ya no la ves por ningún lado.</p>
  
    <p>Te quieres convencer que es lo mejor, que es un alivio que se haya marchado.</p>
  
    <p>Pero no acabas de sentirte cómodo con tus sentimientos.</p>`,
    actions: [
      {
        id: `214`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `84`,
    html: `<p>Cuando te has quedado solo, te pica la curiosidad y te asaltan las dudas: ¿Qué sería lo mejor? ¿Seguir a hurtadillas el grupo de Deilos para averiguar en qué consiste la cacería secreta o acudir a la tienda del médico para ver cómo se encuentra Zarenyo?</p>`,
    actions: [
      {
        id: `08`,
        text: `decides seguir al grupo`,
      },
      {
        id: `194`,
        text: `vas a ver cómo se encuentra Zarenyo`,
      },
    ],
  },
  {
    id: `85`,
    html: `<p>Te desplazas sin hacer ruido, con la agilidad de un gato, tal y como te enseñaron en la academia…</p>

    <p>Al llegar junto a un grueso fresno, hacéis una pausa para recuperar el aliento. Ella no deja de mirarte con insistencia y descubres que se está fijando en todos los detalles de tu indumentaria: la espada al cinto, la ropa de combate… hasta que se queda mirando fijamente tu brazalete con cinco estrías azules.</p>
  
    <p>—¿Qué representa ese brazalete con marcas que llevas en el brazo?</p>
  
    <p>Carraspeas antes de contestar.</p>
  
    <p>—Es una identificación que indica mi graduación.</p>
  
    <p>—¿<i>Tú</i> también eres un guerrero de Uhdanfiún como ellos, verdad?</p>
  
    <p>—Bueno sí, quiero decir no, es decir no exactamente.</p>
  
    <p>—No es la primera vez que veo un brazalete como éste… El que lo llevaba me salvó… cuando me iba a violar un grupo como ése.</p>
  
    <p>Señala a Deilos y los suyos que veis marchar a lo lejos, corriendo hacia el desfiladero.</p>
  
    <p>—Aunque, al igual que tú, también iba con ellos.</p>
  
    <p>No sabes qué contestarle. Solo la miras en silencio.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. A pesar de su mirada dura y fría, ves cómo unas lágrimas brotan de sus ojos.</p>
  
    <p>—Dale recuerdos de mi parte cuando lo veas. —Te besa en los labios suavemente—. Se llama Derguín.</p>
  
    <p>Se separa de ti lentamente, dejando resbalar sus manos por tus mejillas. En las suyas, ves cómo resbalan las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Cuando la pequeña figura se pierde entre los cerros, te pones en marcha para llegar cuanto antes al campamento, pensando en lo que te ha dicho.</p>
  
    <p>Te acuerdas muy bien de ese tal Derguín. Él y su amigo Mikhon Tiq fueron severamente castigados y luego expulsados de la academia, hace un año aproximadamente, por enfrentarse a sus propios compañeros. Sonríes al pensar que acabas de hacer algo parecido, mientras apuras el paso.</p>`,
    actions: [
      {
        id: `34`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `86`,
    html: `<p>Al llegar al vivaque, te encuentras a los instructores con sus espadas desenvainadas, desgañitándose para averiguar si alguien ha resultado herido. Te enteras entonces que el único herido es Zarenyo, que ha recibido dos impactos: el primero le ha fracturado el húmero y el segundo le ha impactado en la cabeza, dejándolo inconsciente. Turpa, máximo responsable de estas maniobras, solicita que se lo lleven de inmediato a la tienda del médico, maese Lartetos, y que después de examinarlo y determinar la gravedad de sus heridas, preparen su traslado a Koras para mañana mismo a primera hora.</p>

    <p>El maestro Turpa parece furioso y ha convocado al resto de alumnos. Os informa que el pérfido ataque ha sido cometido por una docena de campesinos rebeldes que deben vivir en los alrededores. Los han visto huir, pero no han conseguido reconocerles debido a la oscuridad de la noche. Está convencido que se trata de unos insurrectos que albergan resentimiento y envidia hacia los guerreros de Uhdanfiún y de la gloria del imperio Ainar.</p>
  
    <p>El tono firme y autoritario del Maestro Turpa no deja lugar a dudas. Escuchas en silencio, como el resto de alumnos… pero no compartes demasiado su versión de los hechos, sobre todo después de lo que has visto allá arriba.</p>
  
    <p>Turpa interrumpe tu reflexión. Para asegurar toda la zona de acampada, se van a realizar guardias por turnos para controlar la zona exterior y el perímetro interior. Te designa como responsable de la primera guardia para vigilar la franja externa.</p>
  
    <p>Te interesas por la salud de Zarenyo y te informan que permanece inconsciente de momento. Te equipas para la vigilancia ciñéndote la espada al cinto y decides comer algo rápidamente antes de iniciar tu ronda.</p>`,
    actions: [
      {
        id: `132`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `87`,
    html: `<p>Le acaricias el pelo; ella suspira y te sonríe con picardía.</p>

    <p>—No hay mejor sitio que éste; nosotras te cuidaremos.</p>
  
    <p>Las palabras que te ha susurrado la rubia te resultan muy tentadoras. Sus delicadas manos acarician tu cabellera. En ese mismo momento, notas cómo un agradable escalofrío recorre tu espalda.</p>
  
    <p>—Vente a nadar con nosotras.</p>
  
    <p>La pelirroja tiene una voz suave y sus palabras te han encandilado. Baila lentamente a tu lado. Los bucles de su pelo rojizo vuelan al viento como extrañas llamaradas de un fuego mágico, resbalando sobre su espalda pecosa.</p>
  
    <p>Al rato, las tres te alzan del suelo para abrazarte, cogiendo tus manos mientras se acercan al agua reluciente y cristalina. Del fondo emanan brillos misteriosos que parecen provenir de joyas preciosas que reposan en el fondo. El murmullo de las aguas y el canturreo que se puede escuchar entre las ramas invitan a sumergirse. No puedes resistir la atracción que reina en ese mágico lugar y te dejas llevar por esas atractivas mujeres.</p>`,
    actions: [
      {
        id: `51`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `88`,
    html: `<p class="asangre cursiva">Has solventado el enigma. «Ag, el lobo llega» es un palíndromo (palabra o frase que se lee igual hacia delante que hacia atrás). Al contestar con otro palíndromo («Solos»), has descubierto la solución (o has tenido mucha suerte).</p>

    <p>De repente, comprendes lo que está sucediendo. Los lobos no se muestran agresivos, salvo cuando se han sentido amenazados. Se han acercado lentamente y aunque os estén rodeando, no se muestran belicosos sino todo lo contrario: se muestran precavidos y hasta conciliadores. De un modo inexplicable, has asociado su presencia a Tríane y estás convencido de que los ha enviado ella para ayudaros a salir del bosque.</p>
  
    <p>—No dispares. Guarda la flecha. Son amigos.</p>
  
    <p>—¿Qué dices? ¿Te has vuelto loco? ¿Estás seguro?</p>
  
    <p>—Hazme caso.</p>`,
    actions: [
      {
        id: `119`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `89`,
    html: `<p class="asangre cursiva">Has solventado el enigma. «Vislumbrando murciélagos» son dos palabras (bastante largas) cuyas letras no se repiten. Al contestar «tirabuzón» has descubierto la otra palabra con esas mismas características (o has tenido mucha suerte).</p>

    <p>De pronto, entiendes lo que está ocurriendo. Esos lobos no parecen hambrientos; tampoco se muestran muy combativos. Interpretas por lo tanto que podrían ser aliados y probablemente acudan a tu presencia como «mensajeros» de Tríane.</p>
  
    <p>Como tampoco estás muy convencido que tu presentimiento sea acertado, te mantienes a la defensiva intentando no mostrarte agresivo.</p>`,
    actions: [
      {
        id: `120`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `90`,
    html: `<p>Avanzas con cuidado por el resbaladizo suelo que bordea el riachuelo, con la esperanza de que te guíe fuera de este fantasmagórico bosque. Caminas en silencio, con todos los sentidos en alerta. Cuando llevas apenas cinco minutos, ves que el arroyuelo hace un recodo y desemboca en una especia de charca oscura, rodeada de grandes rocas de diferentes tamaños. Sobre las negras aguas flotan algas y cañas podridas. Piensas que tendrás que dar media vuelta, a la vez que experimentas un ligero sopor. Bostezas una y otra vez. Súbitamente, te das cuenta de que estás muy agotado y decides descansar un segundo sobre una de las rocas. Te frotas la cara, quieres despejarte, pero continúas amodorrado. Te vence la somnolencia y al rato, te quedas dormido…</p>`,
    actions: [
      {
        id: `168`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `91`,
    html: `<p>El tirón que te pega el mago te sobresalta.</p>

    <p>—¡Te dije que no te detuvieras y no miraras!</p>
  
    <p>El susto parece haberte sacado del atontamiento que estabas padeciendo y vuelves a trotar detrás del incansable mago. A pesar de que parezca una persona mayor, constatas que tiene una resistencia asombrosa.</p>
  
    <p>De pronto Linar se detiene en seco y tú te das de bruces en su espalda. Te señala un pequeño resquicio que se abre entre dos anchos robles. Reconoces el término del camino que empezaba en un desfiladero y observas cómo al final del monte se adivinan unos pequeños pagos, rodeados por huertos.</p>
  
    <p>Linar se acerca hasta situarse entre los dos robles. Te señala la cabaña más apartada del pago, situada sobre una pequeña loma.</p>
  
    <p>—Están allí… ¿Los ves?</p>
  
    <p>Puedes distinguir varias unas sombras acercándose a la casa, ascendiendo una leve pendiente. Tú puedes acceder a la cabaña por otro camino desde arriba. Los seis perfiles de tus compañeros se van camuflando por los cercados mientras siguen avanzando hacia la casa.</p>
  
    <p>—Nuestros caminos se separan aquí —te dice Linar con voz grave—. Yo regreso a mi santuario. Espero que puedas afrontar esta situación con la misma sabiduría y coraje que tuviste frente al corueco, en el bosque de Corocín. Y te deseo la misma suerte. Adiós muchacho.</p>
  
    <p>Linar vuelve a internarse en la espesura hasta que desaparece en la tupida arboleda.</p>`,
    actions: [
      {
        id: `160`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `92`,
    html: `<p>Durante más de media hora estáis descendiendo por angostos breñales, hasta llegar a un pequeño desfiladero. Observas que la comitiva avanza muy relajadamente por el terreno, lo cual no deja de sorprenderte teniendo en cuenta el ataque que se ha producido hace apenas unas horas en el campamento. Los odres de vino van pasando de mano en mano y el propio Deilos, guía de la peculiar cuadrilla, parece más amigable que de costumbre. Dahzor está muy animado y el resto de compañeros tienen que frenarle para que no beba en exceso, se comporte y se mueva con algo más de sigilo. Tú prefieres mantenerte sereno y solo simulas beber, mojando apenas los labios en la boquilla cuando te pasan el cuero.</p>

    <p>Juzgas más oportuno mantenerte sobrio para lo que se pueda avecinar, ya sea un combate, una caza… o un nuevo encuentro con Tríane.</p>
  
    <p>Tras el paso por el desfiladero os encontráis con una loma guarnecida por frondosos álamos de ramas robustas y ancha copa. Los esbeltos y elegantes árboles forman un soto peculiar desde el cual se puede contemplar el resto del paisaje. Su aspecto majestuoso y sus hojas en forma de corazón te evocan los emplazamientos funerarios de tu infancia y las explanadas donde se realizan las ofrendas a los dioses. Desde este sugestivo lugar, y gracias a la refulgencia de las lunas de Tramórea, puedes ver cómo el terreno vuelve a descender muy suavemente por una vega sembrada con huertos. Divisas pequeños senderos que rodean los cercados. Al otro extremo del estrecho valle, la ladera vuelve a ascender y el horizonte queda recortado por un denso bosque que parece tan impenetrable como los muros de un castillo. Deilos se detiene y requiere con un dramático movimiento la atención de todo el grupo.</p>
  
    <p>—A partir de ahora, silencio absoluto. No queremos que nuestra presa nos descubra antes de tiempo.</p>
  
    <p>Bhratar y Tauldos intentan sofocar una risotada cubriéndose la boca con las manos. Dahzor decide tomar un último trago; Taifos pide permiso para orinar antes de entrar en acción y se adentra en el bosquecillo. El comportamiento de tus compañeros de aventura te parece bastante ridículo.</p>`,
    actions: [
      {
        id: `155`,
        text: `decides observar detalladamente el paisaje y los alrededores`,
      },
      {
        id: `36`,
        text: `te excusas para aliviarte como Taifos y entras en el bosquecillo`,
      },
    ],
  },
  {
    id: `93`,
    html: `<p>Mientras espías la progresión del grupo, ratificas tu primera impresión; la cuadrilla avanza distendidamente por el terreno sin tomar ninguna precaución a pesar de lo ocurrido en el vivaque. Tú te mantienes alerta en todo momento, pensando además en la posibilidad de volver a ver a Tríane.</p>

    <p>Al espiar los movimientos del grupo, observas que los odres de vino se van pasando de mano en mano. Incluso el propio Deilos, el peculiar guía de la banda, echa un trago de vez en cuando y se muestra amigable con Dahzor, que parece el más animado del grupo. Da la sensación que es el que más bebe de todos, seguramente para paliar su nerviosismo y para poder integrarse mejor en el clan de Dedos.</p>
  
    <p>El grupo continúa su marcha mientras tú les vigilas desde una distancia prudente. Te ocultas en el borde del sendero y avanzas silenciosamente, aplicando las enseñanzas recibidas en la academia de Uhdanfiún. Oteas en las proximidades y cuidas tu retaguardia, atento por si aparecen rebeldes y algo emocionado al pensar en la posibilidad de volver a coincidir con Tríane.</p>
  
    <p>La expedición liderada por Dedos toma por un desfiladero que también desciende suavemente, dejando a un lado un enorme bosque. Receloso ante la posibilidad de una emboscada, extremas aún más las precauciones, pero tras un cuarto de hora aproximado y sin incidentes, ves cómo el grupo accede a una loma poblada por una frondosa alameda. El grupo hace una breve pausa cuando se dispone a abandonar el bosquecillo, divisando desde ese mismo lugar una bajada muy suave que desemboca en una vega sembrada con huertos. Al otro extremo del poblado la ladera asciende hasta un denso bosque que se erige majestuosamente. Desde esta distancia, parece impenetrable.</p>
  
    <p>Antes de que el grupo reanude la marcha, Deilos exige la atención de todos, gesticulando teatralmente. Puedes escuchar como advierte al grupo:</p>
  
    <p>—A partir de ahora, silencio absoluto. No queremos que nuestra presa nos descubra antes de tiempo.</p>
  
    <p>Observas a Bhratar y Tauldos, que sofocan risas cubriéndose la boca con ambas manos. Taifos pide permiso para orinar antes de entrar en acción y se adentra en el bosquecillo de álamos. La actitud de tus compañeros te resulta bastante irrisoria.</p>`,
    actions: [
      {
        id: `156`,
        text: `vigilas al grupo`,
      },
      {
        id: `37`,
        text: `te mantienes oculto en el bosquecillo`,
      },
    ],
  },
  {
    id: `94`,
    html: `<p>—Apuesto que la aburrida guardia que acabas de hacer te habrá desvelado. Si te apetece hacer algo más emocionante ahora, te invitamos a que te unas a la banda para participar en… la cacería secreta.</p>

    <p>Deilos te habla entre susurros pero ha recalcado con énfasis sus tres últimas palabras. Te guiña el ojo con complicidad, sabiendo que también habrás escuchado rumores sobre la cacería secreta. A su lado está Merkar, otro de sus «admiradores», con el arco en la mano y la aljaba asomando por detrás de su espalda. Lleva las flechas envueltas en trapos, para evitar que hagan ruido al chocar entre sí.</p>
  
    <p>—¿Qué, te animas? —pregunta Merkar, impaciente—. Dahzor ya se está equipando y nos ha pedido que te esperemos para que te puedas apuntar con nosotros.</p>
  
    <p>Bhratar y Tauldos, el resto de la comitiva de Deilos, están más apartados, pasándose un odre que contiene vino, sofocando risas entre trago y trago.</p>`,
    actions: [
      {
        id: `117`,
        text: `aceptas la invitación para participar en la cacería secreta`,
      },
      {
        id: `150`,
        text: `declinas la invitación argumentando cansancio`,
      },
      {
        id: `178`,
        text: `rechazas la invitación a causa de la emboscada y el estado de Zarenyo`,
      },
    ],
  },
  {
    id: `95`,
    html: `<p>Desplazándote con el mayor sigilo, accedes hasta la loma donde se encuentra el grupo. Observas a Bhratar y Tauldos pasándose un bota de vino para apurar su contenido. Merkar está increpando a Dahzor para que no hable tan fuerte… da la sensación de que ha bebido un poco más de la cuenta.</p>

    <p>Te sigues acercando con cuidado, infiltrándote en la alameda y manteniéndote oculto. Desde tu posición divisas a Deilos, que reclama la atención de todo el grupo con un gesto teatral. Oyes perfectamente sus palabras:</p>
  
    <p>—A partir de ahora, silencio absoluto. No queremos que nuestra presa nos descubra antes de tiempo.</p>
  
    <p>Puedes ver y escuchar a Bhratar y Tauldos sofocar la risa cubriéndose la boca con ambas manos. Taifos pide permiso para orinar antes de entrar en acción y se adentra en el bosquecillo. Todo te resulta muy extraño.</p>
  
    <p>Te agachas para controlar los movimientos del grupo y atisbas a Taifos aliviarse de pie, algo más lejos, junto a un árbol.</p>
  
    <p>Desde tu posición puedes observar cómo la loma desciende luego suavemente hacia una vega sembrada con huertos. Un pequeño sendero rodea los cercados. Al otro extremo, la ladera vuelve a ascender y el horizonte queda recortado por un denso bosque que parece tan impenetrable como los muros de un castillo.</p>`,
    actions: [
      {
        id: `156`,
        text: `vigilas al grupo`,
      },
      {
        id: `37`,
        text: `te mantienes oculto en el bosquecillo`,
      },
    ],
  },
  {
    id: `96`,
    html: `<p class="asangre"><i>Has solventado el enigma. Al igual que el rostro de la misteriosa mujer, las palabras que escuchas en tu mente son simétricas al colocar un eje horizontal en su centro. <i>EXHIBO</i> también cumple con esas condiciones y por lo tanto ésa es la respuesta correcta</i>.</p>

    <p>Avanzas con cautela hacia la joven, extendiendo las palmas hacia arriba para mostrarte afable e intentar no asustarla. Ella sigue mirándote con placidez y no aparenta inquietud. Al preguntarle cómo se llama, te contesta con voz clara y algo grave, sin delatar ningún temor:</p>
  
    <p>—Tríane… —y añade tras una breve pausa—: Tú no eres como los demás.</p>
  
    <p>Te parece que su voz está en armonía con el cuerpo que descubres al internarte entre las malezas. La suave túnica de lino que lleva desvela un físico tan hermoso como sus facciones.</p>
  
    <p>Te disponías a preguntarle qué está haciendo sola en este lugar apartado, pero su serenidad te ha desarmado por completo. Es ella quien toma la iniciativa y te revela con una voz que casi consigue hipnotizarte:</p>
  
    <p>—Eres noble y generoso. He visto cómo aprecias a tu compañero. Haz caso a tu instinto y desconfía de aquellos que intentan imponerte su criterio con autoridad. Tu capacidad y tu buen juicio deberían guiarte en esta difícil prueba. No me defraudes o seré implacable contigo.</p>
  
    <p>Al escuchar el aleteo del mochuelo que alza el vuelo a tu espalda, te giras inquieto. Cuando te das la vuelta para seguir hablando con Tríane, descubres que ya no está. Ha desaparecido sin hacer ruido.</p>`,
    actions: [
      {
        id: `24`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `97`,
    html: `<p>El olor a sangre y sudor te revuelve las tripas. Tienes que hacer un esfuerzo para no vomitar ahí mismo. En el exterior, se empiezan a solapar gritos de alerta sobre el sonido del cuerno. Deilos y Dahzor salen de la cabaña en tromba, dejándote frente al enorme Taifos, que te maldice y se abalanza sobre ti con toda su furia, espalda en alto.</p>

    <p>Teniendo en cuenta que te dobla en tamaño y que es un Ibtahán de quinto grado como tú, vas a necesitar mucha suerte para salir airoso de este enfrentamiento.</p>`,
    random: true,
    actions: [
      {
        id: `107`,
        text: `Continuar`,
      },
      {
        id: `116`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `98`,
    html: `<p>Se mueve otra vez… y sale de su escondite. Apenas te atreves a respirar mientras lo observas.</p>

    <p>Un contorno encapuchado y bajito se desliza con movimiento felino para salir de las sombras. A la espalda lleva un arco corto y una aljaba con flechas, por encima de la capa. Por debajo, puedes ver que va muy desaliñado; una mezcla de pieles y harapos junto con unos calzones amplios y unas botas pequeñas y desgastadas. Para sujetar los pantalones lleva un cinto basto de soga, en el que cuelga una especie de cuerno de caza. Empiezas a sospechar que no se trata de una de esas criaturas que te imaginabas. Parece más bien un crío…</p>
  
    <p>Se acaba de girar para mirar en tu dirección. En un primer momento piensas que ha debido escuchar el sonido de tu corazón desbocado.</p>
  
    <p>Tiene el pelo largo y oscuro… o muy sucio. Su rostro es aniñado y dulce… como el de una chica.</p>
  
    <p>Está en tensión. Ha escuchado algo… o intuye tu presencia. Se inclina hacia delante para atisbar lo que se oculta entre penumbras. Sus ojos son de color azul intenso como el acero… ¡Y es una chiquilla!</p>
  
    <p>No le das tiempo a reaccionar y te abalanzas sobre ella sin que tenga tiempo a oponer resistencia.</p>
  
    <p>Con un bufido ahogado, cae de espaldas debido a tu impulso y el peso de tu cuerpo.</p>
  
    <p>Le aprisionas el brazo y el cuerpo con tus piernas, sentándote sobré su estomago. Te inclinas hacia delante y la examinas detenidamente. Debe tener unos trece o catorce años como mucho. Al mirarla con más detenimiento, te da la sensación que su aspecto mugriento oculta a una linda muchacha.</p>
  
    <p>Aunque en estos momentos su rostro refleja rabia y crispación.</p>`,
    actions: [
      {
        id: `202`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `99`,
    html: `<p>El lobo de cresta blanca se acerca rápidamente junto al lobo negro y resopla. Tres de los lobos, inquietos, quieren reanudar la marcha, pero el lobo más grande ladra con gañidos entrecortados y la manada obedece, deteniéndose. El lobo negro se pone en guardia y puedes ver cómo se le eriza el pelo mientras gruñe en la misma dirección que antes. Puedes escuchar un ruido sordo a lo lejos, que parece acercarse. El gran lobo gruñe impaciente y los otros lobos empiezan a retroceder.</p>

    <p>En ese momento puedes percibir un olor muy raro, entre fétido y metálico.</p>
  
    <p>Intuyes un peligro inminente.</p>
  
    <p>La manada de lobos resopla y gruñe una vez más, plantándose delante de ti, dispuestos a afrontar lo que se acerca. Sea lo que sea, despide un olor cada vez más nauseabundo.</p>
  
    <p>El lobo más grande, situado en el centro, se gira de repente hacia ti y te ladra con fiereza, mostrando sus fauces afiladas.</p>
  
    <p>Te está ahuyentando para que huyas de este lugar. Algo se aproxima a toda velocidad y con pésimas intenciones. Y por la reacción de esos fieros animales deduces que solo se puede tratar de una bestia muy particular: un corueco.</p>`,
    actions: [
      {
        id: `52`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `100`,
    html: `<p>Parece una aberración, pero todo lo que ha ocurrido hasta ahora y la sinceridad de sus palabras… Tienes la intuición que dice la verdad. No sabes qué contestar. Te sientes indignado; a duras penas logras contener tu ira. Todos tus recelos hacia Deilos se intensifican creando el retrato de un individuo execrable cuya maldad ya había aflorado en otras ocasiones. Tus presentimientos sobre él estaban fundados.</p>

    <p>—Te ayudaré a detenerlos.</p>
  
    <p>—Me alegra oír eso.</p>
  
    <p>El pequeño bulto enfunda su arco y sale del escondite. Lleva puesta la capucha y empieza a reptar para seguir avanzando sin perder de vista al grupo. Cuando consigues verle por fin la cara te das cuenta de que… ¡Es una chiquilla!</p>
  
    <p>Su voz ronca no se corresponde a su edad. Es bajita. Debe tener unos catorce años, como mucho. Por debajo de la capa viste muy desaliñada. Con pieles, harapos y unas calzas que le vienen anchas, sujetas con un cinto de soga basto del que cuelga una especia de cuerno de caza. Su pelo es largo y oscuro… o muy sucio. El arco corto y la aljaba con flechas le sobresalen por ambos lados de la espalda.</p>
  
    <p>Su mirada es fría e intensa; sus ojos azules como el acero te desafían.</p>
  
    <p>—Creo que se dirigen a aquella cabaña —te susurra, señalándote una choza algo más alejada que está situada sobre una pequeña loma con huertos y una tapia por la parte que da al bosque.</p>
  
    <p>Al mirarla con más detenimiento, te da la sensación que su aspecto mugriento oculta a una linda muchacha.</p>
  
    <p>—Es la más aislada. Tiene sentido.</p>
  
    <p>Os ponéis en marcha para recuperar la distancia que os separa del grupo.</p>`,
    actions: [
      {
        id: `47`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `101`,
    html: `<p>Encaráis el estrecho prado rodeado de enormes árboles erguidos como un solemne baluarte. Al avanzar por la pradera podéis notar esa fragancia acaramelada que flota en el aire. Ya habéis franqueado el claro y os enfrentáis de nuevo al bosque cuando de pronto escucháis unos gruñidos roncos que se aproximan. En la oscuridad del bosque en el que os disponíais a entrar, veis moverse unas sombras de animales salvajes. Los destellos de unos ojos rojizos les delatan cuando os están observando. Habéis contado tres, quizá cuatro criaturas.</p>

    <p>Dos de ellos se adelantan y se dibujan en el prado, gruñendo en tono bajo e intenso. Son lobos enormes, de aspecto terrible y feroz. El más grande tiene un pelaje de color plomizo, con una cresta blanca sobre el lomo. Se desplaza con lentitud. Sin dejar de gruñir, describe un círculo a vuestro alrededor a la vez que os observa.</p>
  
    <p>La muchacha tensa su arco cargado y cruza la mirada con el jefe de la manada. El lobo de cresta blanca reacciona muy rápidamente, encogiendo el morro y mostrando su feroz dentadura un instante, acobardando a la muchacha en el acto.</p>
  
    <p>Un tercer lobo surge de la oscuridad y se mueve con sigilo hacia el otro lado descubierto. Os están rodeando. El enorme lobo gris se acerca a vosotros gruñendo levemente.</p>`,
    actions: [
      {
        id: `53`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `102`,
    html: `<p>En ese momento sucede algo inesperado. Cuatro lobos enormes han saltado por encima del declive y plantan cara ferozmente al grupo de Deilos. El más grande de todos tiene un pelaje gris plomizo y una cresta blanca encima del lomo. Escucháis voces de desconcierto y temor.</p>

    <p>Ambos los habéis reconocido; ella mira fascinada por un instante la manada que os está salvando. Tú oteas los alrededores y de pronto la descubres, serena y sonriente, observándote detrás la maleza: es Tríane. Te hace un gesto explícito y tú tiras de la muchacha para seguir huyendo.</p>
  
    <p>Te acabas de convertir en un forajido y un rebelde. Pero podrás vivir más aventuras en el reino de Tramórea… y probablemente lo harás en buena compañía. Quizá lo mejor sea ir a Ritión por un tiempo. Esconderse junto al mar siempre resulta más agradable. Zarenyo te recomendó unos lugares preciosos que había por allí y a lo mejor hasta te puede dar cobijo si le cuentas lo ocurrido esta noche.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `103`,
    html: `<p>Recorres en silencio el sendero que lleva hacia el campamento. Faltan pocas horas para que amanezca. Cuando vislumbras a lo lejos vuestro vivaque, empiezas a reducir el paso. A medida que te acercas al perímetro exterior del campamento, aumenta tu recelo…</p>

    <p>Entonces la vuelves a ver. Pelo negro, ojos rasgados, mirada serena. Es Tríane.</p>
  
    <p>—Esperaba mucho más ti, muchacho. Podrías haberlo hecho mucho mejor. Pero te mereces saber la verdad. Sígueme.</p>
  
    <p>Te gustaría confiar en ella, para calmar tu ira y tu frustración. Pero también tienes sed de venganza y justicia.</p>`,
    actions: [
      {
        id: `29`,
        text: `decides seguir a Tríane`,
      },
      {
        id: `193`,
        text: `decides perseguir al grupo`,
      },
    ],
  },
  {
    id: `104`,
    html: `<p>Recorréis en silencio el sendero que lleva hacia el campamento. Faltan pocas horas para que amanezca. Cuando vislumbras a lo lejos vuestro vivaque, empiezas a reducir el paso. Ella te coge de la mano.</p>

    <p>—¿Estás seguro que quieres regresar con ellos?</p>
  
    <p>Su pregunta te hace dudar y afloran a tu mente extraños presentimientos.</p>
  
    <p>Asientes con la cabeza, no muy convencido.</p>
  
    <p>—Entonces, adiós.</p>
  
    <p>La muchacha te abraza una vez más, apretándote un poco más entre sus delgados brazos y antes de soltarte, te da un suave beso en los labios.</p>
  
    <p>Reanudas la marcha y adviertes cómo ella permanece en el camino, contemplando cómo te alejas.</p>
  
    <p>A medida que te acercas al perímetro exterior del campamento, aumenta tu recelo…</p>`,
    actions: [
      {
        id: `58`,
        text: `entras decidido hasta la tienda de los maestros`,
      },
      {
        id: `177`,
        text: `prefieres infiltrarte sigilosamente`,
      },
    ],
  },
  {
    id: `105`,
    html: `<p>—Detente —le dices colocando tu kisha en su cuello.</p>

    <p>Tu voz ha sonado muy tranquila a pesar de que tengas un sabor pastoso en la boca… con regusto a sangre.</p>
  
    <p>Deilos intenta moverse pero presionas la punta de tu espada contra su cuello, haciéndole un ligero corte que empieza sangrar lentamente. Vuestras miradas se cruzan y puedes ver el pánico reflejado en sus ojos.</p>
  
    <p>—¡Huye niña! —le gritas a la chica.</p>
  
    <p>En ese momento, notas otro aguijonazo, esta vez sobre tu esternón. Bajas la mirada un instante. Merkar te ha clavado otra flecha. Una sombra imponente se acerca. Es Taifos, espada en mano, que te contempla atónito, como si no se pudiera creer lo que está viendo. Detrás de él, Merkar recarga su arco por tercera vez.</p>
  
    <p>Ahora Deilos tiene cogida a la chiquilla por el cuello, que se debate aterrorizada, intentando escapar. Todo se está desvaneciendo a tu alrededor y la oscuridad se cierne rápidamente sobre ti. Lo último que escuchas es la voz de Deilos:</p>
  
    <p>—Voy a divertirme con tu nueva amiga, cretino. Taifos, carga con este imbécil y ocultémonos rápido cerca de ese bosque. Puede que su cuerpo nos sirva todavía…</p>
  
    <p>Te parece escuchar el gruñido de unos lobos a tu espalda, pero estás convencido de que son alucinaciones. Empiezas a tiritar y percibes como se amortiguan los sonidos y las imágenes. Has muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `106`,
    html: `<p>Lo cierto es que el lugar es inquietante, y a pesar de que intentas no perder de vista los confines del bosque, la lúgubre presencia de la frondosidad que os rodea impide que puedas tener un punto de referencia, por lo que temes perder el sentido de la orientación en cualquier momento.</p>

    <p>Después de andar un rato, cuando pensabais que resultaba imposible avanzar, se abre un camino entre la espesura sin previo aviso. A vuestra derecha veis un ligero declive que baja hacia un arroyo. A vuestra izquierda, un pequeño prado que despide un aroma penetrante y dulzón. La chiquilla se acerca al arroyo para saciar su sed y al hacerlo, se alzan desde la orilla destellos diminutos de varios colores, entre los cuales predomina el verde. A los brillos fosforescentes se les une un sutil zumbido, parecido al de un canturreo, que rodea a la muchacha. Son luznagos, contribuyendo a darle al extraño lugar un aspecto todavía más fantasmagórico. Tú también te acercas para beber y juntas las manos para tomar agua del regato.</p>`,
    actions: [
      {
        id: `180`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `107`,
    html: `<p>Todavía estás conmocionado por la dantesca escena que has contemplado y no consigues reaccionar a tiempo; notas que la hasha del arma de Taifos se abre paso entre tu hombro y tu cuello, seccionándote la carótida de cuajo.</p>

    <p>Te derrumbas como un títere al que le han cortado los hilos, junto al cuerpo de una mujer semidesnuda a la que han mutilado de manera execrable.</p>
  
    <p>Taifos te escupe al pasar junto ti. Deilos entra de nuevo y te susurra al oído antes de marchar:</p>
  
    <p>—Tú no eres Derguín, pelele.</p>
  
    <p>Sientes que un irresistible sueño te invade. Y notas frío, mucho frío. Te estás desangrando… hasta que mueres.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `108`,
    html: `<p>Te tumbas para espiar los movimientos de Deilos y los otros. Estás hecho un lío, pero le contestas:</p>

    <p>—Si es verdad todo lo que me has dicho, atajaremos esta barbaridad.</p>
  
    <p>Las seis figuras se desplazan agazapadas por los huertos.</p>
  
    <p>La chiquilla se echa a tu lado y estudia los movimientos del grupo.</p>
  
    <p>—Yo creo que se dirigen allí.</p>
  
    <p>Señala una choza aislada que se alza sobre un pequeño montículo. Al frente tiene un huerto bastante amplio, y detrás un poco más de terreno tapiado que colinda con la pradera que sube hacia el bosque.</p>
  
    <p>—Es la que queda más apartada.</p>
  
    <p>Empezáis a reptar hacia la tapia de la cabaña sin perder de vista al grupo. Cuando estáis a punto de llegar, puedes ver como los otros se detienen frente al sendero que lleva a la cabaña. Tenía razón la muchacha. Reconoces a Deilos, dando instrucciones para que los integrantes del grupo tomen posiciones. Os colocáis detrás de la tapia.</p>
  
    <p>En tu cabeza retumban unas palabras y escuchas la voz de Tríane diciéndote: «Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…».</p>
  
    <p>Deilos y el corpulento Taifos están junto a la puerta del cercado. Se disponen a franquear el huerto.</p>`,
    actions: [
      {
        id: `196`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `109`,
    html: `<p>El hedor se acentúa hasta ser insoportable. Colocas a la muchacha detrás de ti, encarando lo que se acerca y esperas con todos los músculos en tensión.</p>

    <p>Escuchas cómo las ramas de los árboles crujen a su paso, cuando una mole sombría y enorme se planta delante de vosotros. Es mucho más grande y ancho que el lobo gris con el que estabais hace un rato… y mucho más aterrador. Tiene un tronco amplio y corvado que impresiona. Sus patas traseras son pequeñas pero vigorosas, y contrastan con unos largos brazos sobre los que se apoya. Tiene una cabeza monstruosa culminada por una especie de cornamenta huesuda. Distingues unos perversos ojos amarillos que te miran con crueldad.</p>
  
    <p>—Cuando se disponga a atacar, sal corriendo y busca una salida. Yo lo entretendré… aunque no sé por cuánto tiempo.</p>
  
    <p>Has decidido entrar en primera aceleración y pronuncias mentalmente la secuencia de letras y números; notas una fuerte tirantez en tus riñones así como una oleada de calor que se filtra por todo tu cuerpo.</p>
  
    <p>El corueco se prepara para el combate, a todas luces desigual. No has desenvainado la espada a propósito, para darle más confianza. Esperas poder realizar un Yagartéi cuando salte sobre vosotros, exprimiendo tu aceleración para intentar atacar su único punto débil: el abdomen.</p>
  
    <p>Ves como el corueco tensa sus patas traseras; una flecha silba junto a tu oído y se estrella contra su pecho, rebotando con un ruido metálico.</p>
  
    <p>El corueco se dispone a saltar sobre vosotros.</p>
  
    <p>—¡Vete! —Le gritas a la chica.</p>`,
    random: true,
    actions: [
      {
        id: `22`,
        text: `Continuar`,
      },
      {
        id: `176`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `110`,
    html: `<p>El olor se intensifica delante tuyo.</p>

    <p>Afianzas tu posición y sujetas tu espada con ambas manos.</p>
  
    <p>Una forma grande y oscura se abre paso entre los árboles; es mucho más grande que un jabalí, incluso más que un oso también. Se planta frente a ti resoplando gravemente. Tiene un amplio tórax abombado y se apoya sobre unos brazos largos; sus piernas son más bien cortas, aunque muy musculosas. Su enorme cabeza está coronada por una cresta de hueso bajo la cual brillan unos pérfidos ojos amarillos.</p>
  
    <p>Has decidido entrar en primera aceleración y pronuncias mentalmente la secuencia de letras y números; al momento notas cómo tus riñones se tensan y un calor intenso se propaga por todo tu cuerpo. El corueco se inclina hacia delante. Tú hincas una rodilla en el suelo y envainas tu espada, manteniendo ambas manos en la empuñadura, preparando tu próximo movimiento. Intentarás realizar un Yagartéi aprovechando tu velocidad para buscar su único punto débil; el abdomen.</p>
  
    <p>Las patas traseras se tensan. El corueco se abalanza sobre ti.</p>`,
    random: true,
    actions: [
      {
        id: `23`,
        text: `Continuar`,
      },
      {
        id: `173`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `111`,
    html: `<p>Te ha parecido advertir una sombra o algo desplazándose por tu campo de visión periférico. Te tumbas con cuidado y te arrastras con suma lentitud para tomar posición y vigilar ese punto. Es al otro extremo del prado, en la ladera que trepa hacia el espeso y intimidatorio bosque. No ves nada… y tras una pausa te dispones a retomar la marcha… Pero ¡algo pequeño se ha vuelto a mover entre aquellas sombras de manera casi imperceptible!</p>

    <p>Observas en silencio, agazapado contra el suelo, al igual que un tigre espiando a su presa. En la lontananza, una pequeña figura se vuelve a agitar, ocultándose de nuevo entre la maleza. Si no hubieses fijado la mirada serías incapaz de detectarla.</p>
  
    <p>Alguien o algo está moviéndose en paralelo al grupo. Y por lo que parece, sea quien sea, está solo.</p>`,
    actions: [
      {
        id: `16`,
        text: `te dispones a rodearlo y sorprenderlo por tu cuenta`,
      },
      {
        id: `28`,
        text: `avisas al grupo discretamente`,
      },
    ],
  },
  {
    id: `112`,
    html: `<p>—Zarpa.</p>

    <p>Das un paso atrás y desenfundas tu espada. A tu espalda la muchacha ha soltado la cuerda de su arco y una flecha se dirige sobre el lobo negro que da un ágil salto para intentar esquivarla y emite un gañido quejumbroso cuando el proyectil le roza el lomo y le hiere.</p>
  
    <p>En ese momento todos los lobos están ladrando y saltando a vuestro alrededor con actitud amenazadora. El gran lobo de cresta blanca se encara a ti y encoge los morros enseñándote sus terribles fauces.</p>
  
    <p>La muchacha intenta apuntar para ahuyentar a otra bestia pero todos se mueven velozmente a su alrededor y le resulta muy difícil apuntar. Los dos habéis retrocedido instintivamente y vuestras espaldas se están tocando.</p>
  
    <p>De pronto el lobo negro levanta el hocico. Parece que olfatea el aire y profiere un corto aullido apenas audible. El lobo de cresta blanca, gira velozmente el tronco hacia ese lado y resopla.</p>
  
    <p>Inesperadamente, los cuatro lobos que os están rodeando dan media vuelta y salen corriendo.</p>
  
    <p>—Los hemos asustado, dice la chiquilla. Vaya suerte.</p>
  
    <p>—Me parece que no —contestas en tono circunspecto.</p>
  
    <p>Percibes un nuevo olor, nauseabundo y metálico.</p>
  
    <p>—Creo que algo peor se acerca, atraído por el olor de la sangre: un corueco.</p>`,
    actions: [
      {
        id: `109`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `113`,
    html: `<p>—Nos tendremos que apresurar —comenta Linar—. Sígueme.</p>

    <p>Linar te precede corriendo por el bosque, recorriendo un camino que se te antoja inexistente. A duras penas puedes seguirle y temes que vas a perder toda la energía que habías recuperado en esta alocada carrera.</p>
  
    <p>—Tenemos que ir más rápido —inquiere Linar en voz baja y sorda—, apenas te queda tiempo. Agárrate a mi capa.</p>
  
    <p>Linar dobla el paso y estás a punto de tropezar pero el mago te coge de la mano y sigue acelerando… hasta que sus pies se levantan del suelo arrastrándote con él. Su levitación os lleva hasta uno de los lindes de Corocín. Te has quedado totalmente alucinado con la experiencia y no consigues articular una palabra.</p>
  
    <p>Reconoces el final del camino que empezaba en un desfiladero y observas cómo al final del monte se adivinan unos pequeños pagos, rodeados por huertos.</p>
  
    <p>Linar señala a lo lejos una pequeña choza más apartada, sobre una pequeña loma.</p>
  
    <p>—Allí.</p>
  
    <p>Alcanzas a ver unas sombras que se acercan a una cabaña por el camino opuesto que debes recorrer. Cuentas las figuras: cuatro, cinco… y seis. Son ellos, efectivamente.</p>
  
    <p>—Nuestros caminos se separan aquí —te dice Linar con voz grave—. Yo regreso a mi santuario. Confío en que sabrás afrontar esta situación con el mismo coraje que tuviste frente al corueco en Corocín. Y espero que tengas la misma suerte. Adiós muchacho.</p>
  
    <p>Linar se interna en el bosque y desaparece en la tupida arboleda.</p>`,
    actions: [
      {
        id: `160`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `114`,
    html: `<p>La ayudas a incorporarse cogiéndola por el antebrazo.</p>

    <p>—Si lo que dices es cierto, haremos lo necesario —contestas.</p>
  
    <p>Has localizado de inmediato las seis figuras camufladas que siguen bordeando los huertos y ocultándose tras los cercados.</p>
  
    <p>La chiquilla se ha colocado a tu lado y te observa de soslayo sin perderlos de vista tampoco.</p>
  
    <p>—Vas muy bien equipado. Camuflado, con arco y espada… ¿Eres un montaraz o un rebelde? Por si no lo sabes, no se permite la posesión de ese tipo de armas por aquí.</p>
  
    <p>Toda tu atención se ha centrado en las oscuras siluetas de tus compañeros que se mueven a lo lejos. Unas palabras retumban en tu mente, y te parece escuchar la voz de Tríane diciéndote: «Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…».</p>
  
    <p>—Ya haremos las presentaciones más tarde. Ahora tenemos que prestar atención y vigilar lo que ese grupo pueda hacer.</p>
  
    <p>Retomáis la marcha, recuperando terreno sobre el grupo para poneros casi a su altura, separados por los huertos y las cabañas de los campesinos.</p>`,
    actions: [
      {
        id: `15`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `115`,
    html: `<p>Dejas caer el arco y desenvainas tu espada, dispuesto a afrontar a Deilos.</p>

    <p>Ves cómo la chiquilla se mueve lentamente para cargar su arco y disparar.</p>
  
    <p>Adoptas una postura de defensa esperando su ataque; escuchas voces de alarma que provienen de las diferentes chozas.</p>
  
    <p>Deilos se lanza sobre ti gritando y lanzando un tajo a la altura de tu cabeza; detienes su hasha con tu acero ejecutando una parada vertical a la altura de los hombros. La inercia de su movimiento le atrae hacia tu lado izquierdo y aprovechas su impulso para girar sobre tus talones y propinarle un codazo en el cuello que le arranca un gruñido de dolor, haciéndole caer hacia delante.</p>
  
    <p>Recupera su equilibrio rápidamente y al levantarse se percata de la presencia de la chiquilla que ya se dispone a tensar el arco. Su aceleración le permite armar el brazo antes de que ella pueda disparar y se dispone a darle un tajo, pero tú ya te has colocado a su lado opuesto y le propinas una patada con todas tus fuerzas que le proyecta hacia el suelo de nuevo.</p>
  
    <p>—¡Huye niña! —le gritas a la chica sin perder de vista a Deilos.</p>`,
    actions: [
      {
        id: `26`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `116`,
    html: `<p>Tu instinto de guerrero prevalece. Te ladeas imperceptiblemente arrodillándote al tiempo que colocas tu espada cruzada frente a ti. La carga del bruto de Taifos no encuentra oposición y pierde el equilibrio hacia delante, con tu espada trabándole las piernas; tropieza y sale rodando aparatosamente al exterior de la cabaña. Cuando se levanta, apenas tiene unos rasguños por la caída, pero está furioso. Tú estás saliendo de la cabaña, con la espada en alto, preparado para el combate.</p>

    <p>Deilos estira a Taifos del brazo, gritándole:</p>
  
    <p>—¡Nos tenemos que ir de aquí ahora mismo! ¡Ya ajustaremos cuentas con él más tarde! ¡Vamoooos!</p>
  
    <p>El grupo sale huyendo y se pierde por el camino que lleva hacia el desfiladero.</p>
  
    <p>La chiquilla te está llamando desde la tapia para que te reúnas con ella.</p>`,
    actions: [
      {
        id: `02`,
        text: `decides seguir a la muchacha para huir hasta los lindes del bosque`,
      },
      {
        id: `126`,
        text: `decides perseguir al grupo`,
      },
    ],
  },
  {
    id: `117`,
    html: `<p>A pesar de ser uno de los mejores alumnos de Udhanfiún, Deilos no te cae muy bien. Sus modales altaneros, su trato despectivo y su comportamiento cruel te desagradan, por lo que has evitado relacionarte con él, evitando sus propuestas e invitaciones hasta hoy.</p>

    <p>Ignoras en qué consiste la cacería secreta, pero tienes curiosidad por saber lo que hay de cierto en todos esos rumores que has escuchado: enfrentamientos con criaturas fantásticas, descubrimiento de lugares desconocidos, encuentros sorprendentes…</p>
  
    <p>Por otra parte, también piensas en la posibilidad de volverte a encontrar con Tríane…</p>
  
    <p>Esa breve cavilación te acaba de convencer, de modo que aceptas acompañarlos.</p>
  
    <p>Analizas lo que llevan tus compañeros y optas por equiparte a conciencia: además de tu espada, coges prestado el arco y las flechas de Zarenyo. El grupo se empecina para que también realices el ritual de camuflaje, por lo que te tiznas con la madera carbonizada que te pasa Dahzor, compartiendo risas ahogadas con el resto del grupo, intentando evitar que os oigan vuestros compañeros de campamento.</p>
  
    <p>Deilos encabeza el grupo e inicia la marcha bajo las tres lunas de Tramórea que proporcionan una luz mágica a esta noche tan especial. Salís del refugio a hurtadillas.</p>`,
    actions: [
      {
        id: `92`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `118`,
    html: `<p>Optas por tener una veloz «reacción» y seguir de cerca al grupo, para no perderte lo que parece va a ser el desenlace de la cacería secreta. Dejas a un lado el encapuchado, que por el tamaño debe ser un niño y sin pensarlo un segundo más, saltas la tapia.</p>

    <p>Al rato alcanzas la parte trasera de la choza… ya puedes ver cómo el grupo está acercándose a la puerta de la choza.</p>
  
    <p>Algo no encaja en esta escena; se supone que no hay gallinas ni ganado en la cabaña.</p>
  
    <p>Reconoces la recia figura de Taifos por su corpulencia y ves como se adelanta a sus compañeros. De pronto, se abalanza sobre la puerta derribándola con el hombro mientras desenvaina el arma, introduciéndose en el interior.</p>
  
    <p>Escuchas golpes y gritos ahogados en la cabaña.</p>
  
    <p>Deilos y Dahzor también entran y tan solo Merkar se queda fuera en posición alerta, con su arco cargado, tensando la cuerda desde la cintura.</p>`,
    actions: [
      {
        id: `172`,
        text: `corres hacia la entrada gritando que se detengan`,
      },
      {
        id: `20`,
        text: `corres hacia la entrada en silencio`,
      },
    ],
  },
  {
    id: `119`,
    html: `<p>La muchacha baja el arco y devuelve su flecha a la aljaba con suma lentitud, mientras se acerca hasta tocarte. No parece muy convencida por tus palabras pero ha decidido hacerte caso.</p>

    <p>El formidable lobo gris de cresta grande avanza hacia ti con cuidado. Os miráis fijamente y percibes una extraña sabiduría que te proporciona confianza. Un vaho templado sale de su hocico cuando resopla, cada vez más cerca. Dos lobos se han posicionado a cada lado y el tercero se pone detrás. La chiquilla se arrima todavía más a ti. El lobo gris, que sin lugar a dudas es el jefe de la manada, gira lentamente hasta darte la espalda y empieza a caminar hacia el bosque.</p>
  
    <p>—Tenías razón… nos están llevando a alguna parte —admite la chiquilla mientras se vuelve a guardar el arco a la espalda—. Espero que sea para sacarnos de aquí.</p>
  
    <p>La manada empieza a trotar a paso más ligero, como si hubiese comprendido los deseos de la chica. Eso os obliga prácticamente a correr, por la diferencia de tamaño. Al cabo de quince minutos, tu compañera está agotada y se agarra a tu cinturón para no desfallecer. Te gustaría pedirle al lobo gris el hacer una pequeña pausa para que se recuperara, pero su tamaño te impresiona y sospechas que no le gustaría que lo agarrases por la cola para detenerlo, aunque la tengas al alcance de la mano. La muchacha empieza a jadear ruidosamente y ya te planteas parar (aunque no sabes cómo), cuando de pronto el lobo negro que está a tu lado se detiene bruscamente y emite un bufido ronco, en actitud vigilante hacia su flanco descubierto.</p>`,
    actions: [
      {
        id: `45`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `120`,
    html: `<p>El enorme lobo de cresta grande se acerca hasta el punto que puedes notar el calor de su aliento cuando bufa al pasar a tu lado. Los tres lobos restantes se han situado a tu alrededor; uno a cada lado y el tercero detrás. El lobo más grande se coloca delante de ti, dándote la espalda y emprende un trote ligero al mismo tiempo que los otros animales también se ponen en marcha. Eso te obliga prácticamente a correr, por la diferencia de tamaño. Durante un cuarto de hora lleváis ese ritmo y empiezas a acusar el cansancio. Te planteas seriamente avisar al gran lobo para reducir la marcha, pero te da mucho respeto su tamaño y no te parece que le vaya a hacer gracia que le agarres por la cola para frenarlo, aunque la tengas al alcance de tu mano.</p>

    <p>De repente, el lobo negro que trota a tu lado izquierdo emite un gruñido y se pone en alerta mirando hacia su flanco descubierto. Todos se detienen. El lobo negro levanta el hocico. Parece que olfatea el aire y profiere un corto aullido apenas audible.</p>`,
    actions: [
      {
        id: `99`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `121`,
    html: `<p>Sueltas la cuerda de tu arco apuntando a Deilos, que ha percibido tu sombra al levantarte y se mueve imperceptiblemente para descubrir de qué se trata. Se escucha un leve silbido y en ese momento tu flecha se clava en su muslo, derribándolo en el acto. Deilos se retuerce en el suelo, ahogando un grito de dolor, que se convierte en un gañido sordo.</p>

    <p>La muchacha, desconcertada puesto que esperaba una señal, ha disparado justo después y su flecha pasa por encima de Deilos, rozando la oreja de Dahzor, que avanzaba por detrás. Asustado por el ataque, da media vuelta y huye gritando:</p>
  
    <p>—¡Es otra emboscada! ¡Nos estaban esperando, huyamos!</p>
  
    <p>La chiquilla está sorprendida por lo ocurrido y te mira de reojo levantando un ceja con reprobación. Tú ya has alzado el cuerno en alto y soplas con todas tus fuerzas, acercándote a la muchacha.</p>
  
    <p>Taifos corre hacia Deilos que está en el suelo, espada en mano, viendo las dos sombras al otro lado de la tapia.</p>
  
    <p>La más pequeña está armando nuevamente su arco y apunta para disparar.</p>
  
    <p>En ese momento se escuchan gritos en la cabaña y en las chozas de los alrededores.</p>
  
    <p>—¡Retirada! —Vocifera el corpulento Taifos, cargándose a Deilos a los hombros.</p>
  
    <p>Tú agarras el brazo de la chiquilla, forzándola a bajar su arco.</p>
  
    <p>Un poco más abajo, Merkar se arrodilla, deja pasar a su compañero y tensa el arco esperando el ataque. A cada salto que da Taifos, Deilos gruñe a causa de la herida en su muslo.</p>
  
    <p>—Vamos —le susurras suavemente a tu misteriosa compañera—. ¿No querrás que nos sorprendan aquí, verdad?</p>
  
    <p>Te lanza una fría mirada de reproche. Tiras de ella y corréis agazapados subiendo por la loma hasta los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: `33`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `122`,
    html: `<p>Inmóvil y acurrucada contra un viejo olmo aislado, pasa totalmente desapercibida. Te aproximas con cuidado hasta ella, esperando que no esté herida… o algo peor.</p>

    <p>Te sientas a su lado y te alivia comprobar que respira lentamente. Le pones con suavidad la mano en el hombro susurrándole previamente:</p>
  
    <p>—¿Estás bien?</p>
  
    <p>Ella se sobresalta e instintivamente se aleja por un momento, pero al reconocerte sonríe y te abraza con todas su fuerzas.</p>
  
    <p>—¡Estás vivo! Pensé que el corueco… —Te observa con atención, asombrada que no tengas ninguna herida grave—. Co… ¿cómo lo has conseguido?</p>
  
    <p>Algo agitado por su espontáneo abrazo, le contestas con otra sonrisa:</p>
  
    <p>—Con mucha suerte. ¿Sabías que un mago tuerto habita ese bosque?</p>
  
    <p>Ella hace una mueca divertida, simulando reflexionar.</p>
  
    <p>—Escuché hace tiempo que muchos años atrás un viejo loco se escondía en el bosque de Corocín, y creo recordar que decían que tenía un parche en un ojo. Pero seguro que ha muerto desde entonces. No puede ser el mismo.</p>`,
    actions: [
      {
        id: `79`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `123`,
    html: `<p>La transformación te horroriza y repugna al mismo tiempo, al recordar que segundos antes estabas abrazado a ellas. Sus voces han dejado de ser seductoras para convertirse en un siseo viperino que proviene de las bífidas lenguas que asoman tras unas bocas espantosas. Medio desnudo pero totalmente recuperado, intentas sacarte de encima lo que supones deben ser mortíferas Niryiin, alzando tu espada y apuntando hacia ellas tu acero. Cuando acercas la kisha a una de ellas ves cómo retrocede y se enrosca, encogiéndose y silbando amenazas, mientras otra procura sorprenderte por detrás. Te ves obligado a girar constantemente, blandiendo tu arma de manera desafiante, para mantenerlas a distancia. Con un movimiento intimidatorio, consigues finalmente arrinconarlas contra una roca. Las hermosas doncellas se han convertido en esperpénticas visiones de cabello greñudo y aspecto de ofidio. Te preparas para lanzarles un golpe mortal cuando se revuelcan en el suelo súbitamente y huyen vertiginosamente hacia las aguas de la charca que burbujean a su contacto. En el momento de sumergirse, jurarías que sus esbeltas piernas se habían convertido en sinuosas colas de serpiente.</p>

    <p>Tu entorno ha perdido todo el encanto de hace unos instantes. La poza vuelve a ser lúgubre y apestosa. Los alrededores tienen un aspecto tétrico y sobre todo, extremadamente peligroso.</p>
  
    <p>Te vistes apresuradamente y regresas hasta el lugar donde dejaste a la chiquilla durmiendo para constatar que, afortunadamente, no ha sufrido ningún daño y sigue adormilada entre los helechos. La despiertas con cuidado y compruebas que está confusa. Le informas que la charca es un callejón sin salida putrefacto y que tenéis que regresar por donde habéis venido. Decides que es mejor no contarle tu aventura con las Niryiin, no vaya a ser que te pida que le cuentes los detalles.</p>
  
    <p>Reemprendéis el camino que os lleva de nuevo hasta el claro.</p>`,
    actions: [
      {
        id: `101`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `124`,
    html: `<p>Te estremeces al ver que el siseo sus voces va acompañado de una mueca y que por sus bocas asoman lenguas de reptil. La espantosa visión te libera brutalmente de su hipnótico hechizo. Supones que deben ser Niryiin y empuñas con firmeza tu espada para amenazarlas con el acero. Cada vez que el arma apunta en dirección de una de ellas, ésta se retuerce y se agacha retrocediendo mientras que otra intenta acercarse por detrás. Las mantienes a raya girando sobre ti mismo e intentas arrinconarlas. Han perdido todo el atractivo: sus largas y sedosas melenas se han convertido en sucio cabello encrespado, sus bífidas lenguas se agitan silbando en el aire, sus dulces miradas tienen ahora connotaciones viperinas. Logras encararlas a las tres, y cuando te dispones a lanzar un ataque, huyen velozmente saltando a las aguas de la poza, que borbotean a su contacto. Te ha dado la impresión que en el momento de sumergirse ya no tenían esbeltas piernas, sino largas colas de serpiente.</p>

    <p>El aspecto de la poza vuelva a ser el que viste antes de sentirte tan cansado. Lúgubre, tenebroso, y sobre todo, muy peligroso.</p>
  
    <p>Vuelves sobre tus pasos. Al pasar junto a la tumba de la muchacha, no puedes evitar pensar que ella te hubiese podido ayudar a superar ese espantoso encuentro.</p>
  
    <p>Retomas el camino hasta llegar al prado.</p>`,
    actions: [
      {
        id: `158`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `125`,
    html: `<p>Desde el umbral te invade un intenso olor a sangre y sudor. A tu derecha yace una mujer, en postura obscena, que acaba de ser mutilada. La sangre todavía sale a borbotones de un muñón sanguinolento; la pantorrilla seccionada está junto a la puerta, como si fuese un pedazo de muñeca roto. Un espantoso olor a sangre mezclado con sudor te produce arcadas y estás a punto de vomitar ahí mismo.</p>

    <p>Te has quedado tan paralizado por el horrible espectáculo, que no lo has visto venir. La afilada hoja de una espada te secciona el cuello y en tus últimos segundos de vida, tu campo de visión se tambalea y solo consigues contemplar el atónito rostro de Taifos que te acaba de descargar el mortífero tajo.</p>
  
    <p>—Pero ¿qué c…?</p>
  
    <p>Todo se ha vuelto negro. Ya no escuchas nada más. Has muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `126`,
    html: `<p>Cruzas la mirada con la chiquilla; te está implorando que vayas con ella. Pero la indignación y el odio te dominan. Levantas la mano y te despides con un gesto, seguramente por última vez, antes de salir corriendo detrás del grupo.</p>

    <p>Corres con la esperanza de darles alcance, aunque no tienes muy claro lo que harás cuando te enfrentes a ellos.</p>
  
    <p>Puedes ver cómo se repliegan rápidamente, volviendo por donde han llegado. Bhratar y Tauldos encabezan el grupo, seguidos de Deilos y Dahzor… Taifos cierra la marcha ayudando a Merkar, que gruñe de dolor por la flecha que tiene clavada en la espalda.</p>
  
    <p>De las diferentes chozas ves salir a los campesinos furiosos, dando la alarma. Alguien ha visto la matanza y grita: «¡Asesinos! ¡Asesinos!».</p>
  
    <p>Aceleras para dar alcance al grupo, pero acusas el cansancio del reciente combate…</p>`,
    actions: [
      {
        id: `64`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `127`,
    html: `<p>No te ha dado tiempo a esquivar el rotundo golpe que te da en la cabeza con la empuñadura de su espada. Todo se oscurece de golpe y caes al suelo como un saco.</p>

    <p>Te despiertan una, dos, tres bofetadas, a cuál más fuerte.</p>
  
    <p>Te despiertas viendo a la chiquilla, rodeada de diminutos lunazgos multicolores, que te está diciendo:</p>
  
    <p>—¡Tenemos que marcharnos de aquí! ¡YA!</p>
  
    <p>A tu alrededor suenan voces de alerta y ladridos de perros enloquecidos.</p>
  
    <p>Te has despejado de golpe. La muchacha te ayuda a levantarte y corréis hasta el linde del bosque de Corocín, para ocultaros en sus sombras.</p>`,
    actions: [
      {
        id: `68`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `128`,
    html: `<p>Escuchas a Deilos explicarle lo ocurrido. Turpa se lamenta con indignación.</p>

    <p>—… vaya, jamás lo hubiera pensado de él. Un Ainari tan prometedor y resulta que tampoco tiene lo que hay que tener. Debimos haberle despachado junto con el inútil Zarenyo de Ritión en el momento que simulamos la emboscada al campamento. Si el bosque de Corocín no ha acabado con él y tiene la osadía de regresar aquí, lamentará no haber muerto. ¿Algún testigo?</p>
  
    <p>Escuchas la voz de Deilos, después de un leve carraspeo:</p>
  
    <p>—Ninguno, Maese Turpa. Pero no pudimos dar el escarmiento en el poblado como teníamos previsto. Se tendrá que realizar otra cacería secreta para que la aldea comprenda que no pueden retrasarse a la hora de pagar los impuestos.</p>
  
    <p>Te alejas de la tienda consternado a la par que rabioso.</p>`,
    actions: [
      {
        id: `207`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `129`,
    html: `<p>No alcanzas a levantarte; uno de los campesinos te golpea con un azadón en toda la cabeza. Empiezas a perder la conciencia a la vez que un tumulto te rodea, propinándote patadas, lazándote piedras, golpeándote…</p>

    <p>No volverás a despertar. Te están lapidando.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `130`,
    html: `<p>Os alejáis todo lo rápido que podéis, mientras empezáis a escuchar aullidos, ladridos y un bramido estentóreo, como anticipo de un gran enfrentamiento. Ella todavía no se ha recuperado del todo y tenéis que reducir la marcha. Os da la impresión de que os habéis vuelto a perder en este despiadado, tupido y oscuro bosque.</p>

    <p>Mientras ella descansa sentándose contra el tronco un fresno, tú buscas alguna pista que os pueda ayudar a salir de Corocín. Desesperado, te da la sensación que habéis regresado cerca de la confluencia del arroyo con el prado. «Maldito bosque», piensas. Es un horrible laberinto.</p>
  
    <p>Y de pronto, lo vuelves a oler. Esa hedionda emanación con efluvios metálicos.</p>
  
    <p>Imposible. No puede ser el mismo. Tiene que ser otro que os ha seguido el rastro.</p>
  
    <p>Te dispones a hacer frente al inminente peligro que se acerca.</p>`,
    actions: [
      {
        id: `109`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `131`,
    html: `<p>Estás reptando con cuidado para rodearlo y colocarte detrás suyo. Apenas logras distinguirle cuando se desplaza; no te extraña que Deilos y los otros, todavía más alejados, no consigan descubrirlo. En un momento dado puedes intuir mejor el perfil del pequeño bulto que te precede. Un personaje muy bajito, sin duda. Te parece que va encapuchado y te ha dado la sensación que llevaba algo a la espalda, probablemente un arco corto.</p>

    <p>Sin perder a tu objetivo de vista, miras de refilón hacia la ladera opuesta. Únicamente Deilos gira discretamente la cabeza de vez en cuando, para localizar tu presencia.</p>
  
    <p>Te estás acercando cada vez más a él. Contienes la respiración para no hacer ni el más mínimo ruido. Estás a punto de alcanzarle y su sombra se perfila cada vez mejor. Confirmado, es muy pequeño. Ya casi lo tienes. Te deslizas pegado al suelo con tanto sigilo que estás persuadido que el grupo tampoco te puede ver. Vas a cazarlo en cinco, cuatro, tres, dos… ahora.</p>`,
    actions: [
      {
        id: `67`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `132`,
    html: `<p>Estás realizando la ronda con todos tus sentidos en alerta para anticipar otro posible ataque. Puesto que sospechas que pueden ser algo más que simples campesinos descontentos, escudriñas las sombras entre la espesura, vigilante ante cualquier movimiento o sonido que se produzca. Cuando alcanzas la parte más alejada del campamento, te sobresalta un «<i>u-úh</i>» lastimero y melódico. Levantas la vista y consigues vislumbrar la pequeña y compacta figura de un mochuelo sobre la rama de un viejo fresno. Sus grandes ojos amarillos te observan con curiosidad y puedes distinguir su característico plumaje marrón con lunares blancos. Al rato gira su cabeza, como si fuera la rosca de un engrasado mecanismo. Al desviar tu mirada hacia el punto que está fijando la rapaz, vuelves a sobresaltarte, pero esta vez con más razón: una muchacha te observa en silencio y totalmente inmóvil. Tiene el cabello muy negro, un rostro sereno y unos ojos rasgados que te miran fijamente, como si te atravesaran.</p>

    <p>No hay nadie más, solo ella. Te parece absurdo dar la alarma por la extraña presencia de una joven que no parece tener veinte años, aunque por otra parte, todo esto resulta muy extraño…</p>`,
    actions: [
      {
        id: `25`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `133`,
    html: `<p>Escuchas a Deilos explicarle lo ocurrido.</p>

    <p>—… vaya, jamás lo hubiera pensado de él —contesta Turpa—. Un Ainari tan prometedor y resulta que tampoco tiene lo que hay que tener. Debimos haberle despachado junto con el inútil Zarenyo de Ritión cuando simulamos la emboscada al campamento. Si los campesinos no han acabado con él y tiene la osadía de regresar aquí, lamentará no haber muerto. ¿Algún testigo?</p>
  
    <p>Escuchas la voz de Deilos, después de un leve carraspeo:</p>
  
    <p>—Ninguno, Maese Turpa. Los matamos a todos. Seguro que tomarán nota en la aldea y ya no se retrasarán más a la hora de pagar los impuestos.</p>
  
    <p>Te alejas de la tienda consternado a la par que rabioso. Tríane te coge de la mano mientras te habla, y te dejas llevar a las afueras del campamento, donde la viste por primera vez.</p>
  
    <p>—No te queda otra alternativa que convertirte en fugitivo. Se avecinan tiempos revueltos y tendrás que ser mucho más prudente si quieres sobrevivir. Y si deseas seguir conociendo los secretos del Tahedo, ten paciencia y busca a un guerrero llamado Kratos May.</p>
  
    <p>Notas cómo sus dedos sueltan tu mano y te rozan la punta de los dedos. Quieres mirarla a los ojos una vez más… pero ya no está.</p>
  
    <p>Miras a tu alrededor. Decides que vas a ocultarte un tiempo en Ritión. Zarenyo te contó que habían lugares fantásticos allí.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `Ir al principio`,
      },
    ],
  },
  {
    id: `134`,
    html: `<p class="asangre">De pronto, el corueco borbotea retrocediendo y fijando su mirada ocre algo más arriba, a tu espalda. Una extraño brillo azulado se proyecta sobre su tórax y el corueco bufa exasperado, agitando los brazos, pero continúa retrocediendo, internándose de nuevo en la espesura y dejando tras de si un olor fétido, así como un pequeño reguero de sangre.</p>

    <p>Te giras con mucho cuidado para afrontar lo que tienes a tu espalda. Ves a un hombre muy alto y delgado, de rasgos angulosos, cuya trenza blanca reposa sobre su larga capa. En su mano sostiene un bastón de madera con una serpiente tallada que se enrosca alrededor. Percibes que parece flotar sobre el suelo y que posee una aura luminosa que va decreciendo a medida que sus pies descalzos van tomando contacto sobre la hierba húmeda. Observas que te mira sorprendido con su único ojo izquierdo, puesto que el derecho está tapado por un parche oscuro.</p>
  
    <p>—¿Qué extraña locura suicida te ha traído hasta el bosque de Corocín en plena noche?</p>
  
    <p>Mientras recoges tu espada, contestas que crees haberte perdido y le preguntas su nombre, para poder recordar quién te salvó esta noche.</p>
  
    <p>—Aquellos que me conocen me llaman Linar, por lo que deberás abstenerte de pronunciar mi nombre. ¿Adónde te diriges muchacho?</p>
  
    <p>Al ser incapaz de dar una respuesta concreta, le cuentas que una chiquilla que te acompañaba y tú os habéis adentrado en el bosque huyendo del grupo de Deilos. La hirieron de muerte y tuviste que enterrarla junto al arroyo.</p>
  
    <p>El extraño personaje se acerca a la sepultura y apoya la mano contra la tierra húmeda. Parece meditar y cierra su único ojo sin decir una palabra. El mago te brinda hospedaje para que te puedas recuperar antes de continuar.</p>`,
    actions: [
      {
        id: `40`,
        text: `le pides a Linar que te lleve hasta los lindes del bosque`,
      },
      {
        id: `77`,
        text: `aceptas su invitación`,
      },
    ],
  },
  {
    id: `135`,
    html: `<p>Apoyas la mano en el hombro de tu misteriosa compañera para que se agache aún más; sabes que Deilos y los otros están escudriñando los alrededores. Tú también te agachas lentamente vigilando lo que hace el grupo en todo momento.</p>

    <p>Te da la sensación de que Bhratar, que iba el último, ha vuelto sobre sus pasos para buscarte. Al rato regresa y le hace un gesto de impotencia a Deilos, que parece impaciente. Tras dudar un instante, le hace una señal a Bhratar para que se una al grupo.</p>
  
    <p>Escuchas el leve roce de una flecha frotando la cuerda del arco. Agachas la mirada y ves a la muchacha preparándose para disparar. La sujetas por el brazo, para frenar sus intenciones.</p>
  
    <p>—¿Cuál es tu plan? —le preguntas.</p>
  
    <p>—No pienso esperar a que entren en esa cabaña y masacren a una familia entera. Voy a cargarme al cabecilla de esos asesinos y luego daré la alarma con el cuerno.</p>
  
    <p>La perspectiva de atacar a tus compañeros de academia no te resulta cómoda. Matarlos se te antoja impensable y preferirías que los maestros impartieran justicia y castigo como es debido.</p>
  
    <p>—Pásame el cuerno —murmuras—, espero que sepas usar ese arco. Dame dos segundos para que me sitúe al otro lado de la cerca y te haga una señal para que podamos pillarles con un fuego cruzado.</p>
  
    <p>Mientras reptas por el suelo alejándote, elaboras un plan precipitadamente…</p>`,
    actions: [
      {
        id: `70`,
        text: `vas a soplar el cuerno y dar la alarma`,
      },
      {
        id: `195`,
        text: `te anticipas a la chiquilla y vas a disparar primero`,
      },
    ],
  },
  {
    id: `136`,
    html: `<p>Calculas que en cuarenta pasos deberías alcanzarle y sigues progresando.</p>

    <p>Avanzas varios metros arrastrándote con sigilo entre hierbajos y arbustos, buscando algún lugar donde poder acomodarte para seguir vigilando. Según tus cálculos, debería estar aproximadamente a unos diez pasos por delante. Cuando te dispones a resbalar para colocarte detrás del tocón de un roble, escuchas detrás de ti un leve chasquido que reconoces al instante: es el crujido de la cuerda de un arco al tensarse.</p>
  
    <p>Un cuchicheo te llega desde ese lugar, perfectamente audible:</p>
  
    <p>—No te muevas —y pregunta—: ¿Me estás siguiendo a mí o a ellos?</p>`,
    actions: [
      {
        id: `62`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `137`,
    html: `<p>A pesar del pánico que inspiran estas criaturas, hay algo que no te encaja en esta situación. Intentas atisbar el más mínimo detalle para poder descubrir lo que puede no cuadrar. En ese momento, el jefe de la manada avanza, acercándose a ti. Su pezuña es casi del tamaño de tu cabeza. Un extraño aleteo te distrae por un momento y levantas la vista…</p>

    <p>«Vislumbrando murciélagos».</p>
  
    <p>La respuesta adecuada a este enigma te mostrará cual es la decisión correcta.</p>`,
    actions: [
      {
        id: `89`,
        text: `piensas que la solución acertada es «Tirabuzón»`,
      },
      {
        id: `14`,
        text: `crees que es «Saltimbanqui»`,
      },
    ],
  },
  {
    id: `138`,
    html: `<p>Cuando el grupo agazapado está llegando a tu altura, te incorporas y ayudas a la chiquilla a levantarse, colocándola a tu espalda.</p>

    <p>—Confía en mí —le murmuras.</p>
  
    <p>Deilos también se incorpora, observando con interés lo que ocultas. Los demás también le imitan.</p>
  
    <p>—Vaya, parece que nuestro amigo ha cazado a la mejor presa en esta cacería secreta.</p>
  
    <p>La muchacha se oculta aún más a tu espalda; notas que una de sus manos se agarra por detrás a tu cintura y notas cómo te clava las uñas fuertemente en los riñones.</p>
  
    <p>—No te muevas Deilos. Vamos a dejarla que se marche y regresar al campamento.</p>
  
    <p>—¿Me tomas por idiota? ¿O acaso la quieres para divertirte tú solito?</p>
  
    <p>Las uñas se clavan aún más en tu carne, pero aparentas no sentir nada. Deilos te examina con recelo. Vuestras miradas se cruzan, desafiantes. Cruzas tu brazo y colocas con naturalidad tu mano sobre la empuñadura de la espada.</p>`,
    actions: [
      {
        id: `208`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `139`,
    html: `<p>Buscas opciones que te permitan seguir avanzando. Otra piedra impacta en tu roble. Te dispones a entrar en Protahitéi (segunda aceleración) para sorprender a tus atacantes. Te concentras para enumerar la secuencia de letras y números secreta.</p>`,
    actions: [
      {
        id: `198`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `140`,
    html: `<p>No entiendes cómo se te ha podido escabullir. Miras en todas direcciones: a tu izquierda la ladera sigue ascendiendo hasta el amenazador bosque. No ves ningún movimiento en esa dirección. Mucho más adelante, a tu derecha y al otro lado de la ladera, puedes ver cómo avanza el grupo de Deilos, que sigue infiltrándose entre los huertos y chozas de la aldea de campesinos. Tampoco parece que nada se mueva entre tú y ellos. Al frente tampoco se divisa nada; cercados y huertos, senderos que ascienden hacia el bosque, vallados y tapias que delimitan los terrenos de algunos campesinos, malezas y algún árbol aislado… pero ninguna evidencia del extraño personaje que estabas siguiendo hace un instante.</p>

    <p>Sigues avanzando con cautela, buscando a la criatura fantástica mientras vigilas a Deilos y los suyos.</p>`,
    actions: [
      {
        id: `163`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `141`,
    html: `<p>Dudas un instante si deberías acercarte al encapuchado o si lo mejor es saltar la tapia y acercarse a la cabaña para saber qué se proponen Deilos y sus compinches. Tu sentido de la observación te dice que sabrás tomar la buena decisión después de sopesar estas dos opciones: «Bribonzuela» y «Curiosear».</p>`,
    actions: [
      {
        id: `21`,
        text: `piensas que «Ecuación» es la respuesta correcta, te acercas a al encapuchado`,
      },
      {
        id: `118`,
        text: `crees que «Reacción» es la respuesta correcta, saltas la tapia para seguir avanzando hasta la cabaña`,
      },
    ],
  },
  {
    id: `142`,
    html: `<p>Interpones tu brazo con firmeza y le haces bajar el arco, mientras le susurras enfadado:</p>

    <p>—¿Estás loca? ¡Solo van a robar una gallinas, tampoco hay que matarles por eso!</p>
  
    <p>Te clava su mirada de acero azul apretando los dientes.</p>
  
    <p>—Eres más idiota de lo que imaginé. Van a matarlos a todos… o algo peor.</p>
  
    <p>La voz se la ha quebrado al terminar la frase.</p>
  
    <p>Durante una milésima de segundo te quedas paralizado. Tienes un extraño presentimiento que te obliga a tomar una decisión.</p>`,
    actions: [
      {
        id: `18`,
        text: `cargas tu arco para disparar`,
      },
      {
        id: `118`,
        text: `no la crees y corres hacia el grupo`,
      },
    ],
  },
  {
    id: `143`,
    html: `<p>Inesperadamente, ves cómo el corueco retrocede borboteando mientras clava la vista en algo que tienes por encima de tu espalda. Un brillo azulado resplandece y se proyecta sobre el corueco que resopla irritado y agita los brazos, sin dejar de retroceder. Asombrado compruebas cómo se retira y se interna nuevamente en el bosque. Tan solo queda un pequeño rastro de sangre y el hedor infecto flotando en el aire.</p>

    <p>Cuando te das la vuelta, te sorprende ver a un hombre muy alto y espigado, con rasgos aristados y una larga capa, que tiene una trenza de pelo blanco que descansa sobre su hombro. Su ojo derecho esta tapado por un oscuro parche. Admiras desconcertado como parece flotar sobre el suelo rodeado de un halo lumínico que decrece a medida que desciende lentamente y sus pies descalzos pisan suavemente la esponjosa hierba junto al arroyo. Sujeta con firmeza un bastón de madera que lleva tallada una incrustación en forma de serpiente enroscada a lo largo del báculo.</p>
  
    <p>Su ojo izquierdo te analiza con detenimiento.</p>
  
    <p>—¿Cómo se te ocurre jugarte la vida en el bosque de Corocín de noche?</p>
  
    <p>Le agradeces la ayuda y recuperas tu espada, preguntándole a quién le debes la vida.</p>
  
    <p>—Hace tanto tiempo que no me relaciono con la civilización que apenas recuerdo mi nombre. Pero creo que me puedes llamar Linar. ¿Qué se te ha perdido por aquí, muchacho?</p>
  
    <p>Le explicas que la muchacha que te acompañaba y tú habéis entrado en Corocín tras ser perseguidos por un grupo de canallas con malas intenciones, sabiendo que no faltas a la verdad. Te preocupa la muchacha, perdida en este laberíntico bosque.</p>
  
    <p>El mago te ofrece alojamiento para que te recuperes antes de continuar.</p>`,
    actions: [
      {
        id: `41`,
        text: `le pides a Linar que te lleve hasta los lindes del bosque`,
      },
      {
        id: `75`,
        text: `aceptas su invitación`,
      },
    ],
  },
  {
    id: `144`,
    html: `<p>Apuntas con tu arco hacia el grupo sin tener muy claras tus intenciones.</p>

    <p>Por una parte resuenan en tus oídos consejos y advertencias que te incitan a pensar que todos los avisos son ciertos, pero por otro lado te resulta impensable atacar, y aún menos matar a tus compañeros de academia.</p>
  
    <p>Intentas encontrar la solución para este gran embrollo.</p>
  
    <p>Por el rabillo del ojo ves cómo la niña apunta con determinación. La situación se está complicando cada vez más y preferirías evitar que alguien saliera dañado.</p>
  
    <p>—¿No sería mejor dar la alarma con tu cuerno? —susurras ladeando tu boca.</p>
  
    <p>—Luego; primero quiero matar al cabecilla. Es un asunto personal.</p>`,
    actions: [
      {
        id: `159`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `145`,
    html: `<p>Agarras a Dahzor, que se dispone a atrapar al niño que acabas de salvar, y lo desequilibras estirándolo hacia atrás con fuerza, interponiendo su cuerpo entre tú y Deilos cuando éste se disponía a propinarte una estocada mortal.</p>

    <p>Sigues escuchando el sonido del cuerno de fondo, como apagado, y eso te propicia una leve ventaja, puesto que todos se sobresaltan… salvo Taifos, que imperturbablemente decapita al crío con un tajo limpio. El cuerpo todavía da unos pasos antes de desmoronarse.</p>
  
    <p>Ahora es Merkar quien profiere un grito en el exterior. Ya no hay nada que hacer y sales como una exhalación de aquel lugar infernal. A tu espalda escuchas la amenaza de Deilos:</p>
  
    <p>—¡Te arrepentirás de todo esto cuando nos veamos, maldito!</p>
  
    <p>Sigues corriendo velozmente y pasas junto a Merkar que ahora se retuerce de dolor con una flecha clavada en el muslo. Asciendes la ladera y saltas la tapia en un suspiro, agarrando a la chiquilla por la cintura y ascendiendo a toda velocidad hacia los lindes del bosque de Corocín con las últimas fuerzas que te proporciona la Protahitéi.</p>
  
    <p>A vuestras espaldas, los gritos de alarma provenientes de otras casas de la aldea se oyen por todo el valle. Parece que han descubierto la matanza y, afortunadamente para vosotros, solo se han fijado en el grupo que está huyendo hacia el desfiladero.</p>`,
    actions: [
      {
        id: `68`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `146`,
    html: `<p>En ese mismo instante Dahzor se asomaba para ver lo que está pasando fuera. Pone cara de asombro al reconocerte y aprovechas para propinarle un tremendo empujón que lo lanza hacia atrás, provocando su caída en el suelo… encharcado de sangre.</p>

    <p>La escena es aterradora. Deilos y Taifos te miran, sorprendidos de verte aquí. Taifos está desclavando su espada de la espalda de una mujer, tendida en el suelo en una postura obscena. Dahzor te reconoce y balbucea tu nombre desde el suelo.</p>
  
    <p>Deilos sonríe cruelmente.</p>
  
    <p>—Llegas demasiado tarde. La Cacería ha terminado.</p>
  
    <p>Tienes tal nudo en la garganta que no reconoces tu propia voz:</p>
  
    <p>—¿Os habéis vuelto locos?</p>
  
    <p>El sonido de un cuerno os sobresalta a todos. El corpulento Taifos te señala con el dedo y exclama:</p>
  
    <p>—¡Este majara nos ha delatado!</p>`,
    actions: [
      {
        id: `97`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `147`,
    html: `<p>Tú les sigues lentamente y te parapetas en la alameda sin perder de vista al grupo. Ahora avanzan cautelosamente, en fila y sin hacer ruido, con Deilos a la cabeza de la curiosa procesión. Los observas alejarse desde el bosque, antes de seguirles a campo abierto. Desde esta posición contemplas todo el valle, por lo que no necesitas pisarles los talones. Estás examinando el terreno con el fin de sopesar la mejor posición para seguir al grupo sin ser descubierto, cuando notas una presencia a tu espalda.</p>

    <p>Te giras de repente, sin poder reprimir un sobresalto. Tríane está tu lado y apoya su mano en tu pecho. Te sonríe con la misma calma que la última vez que os visteis.</p>
  
    <p>—Te estás embarcando en una aventura con terribles consecuencias. ¿Sabrás distinguir entre aliados y enemigos? ¿Podrás controlar tu destino? Tendrás que descubrir lo que otros no alcanzan a ver…</p>
  
    <p>Su voz te perturba, a pesar de la calma que transmite su tono pausado y grave.</p>
  
    <p>—¿Siempre me vas a hablar por enigmas?</p>
  
    <p>—Y no dejes que se te escape ningún detalle…</p>
  
    <p>La advertencia de Tríane te pone en alerta y vuelves a mirar en dirección al grupo para cerciorarte de que siguen ahí. Te vuelves hacia Tríane, pero ya no está. Lo ha vuelto a hacer de nuevo.</p>
  
    <p>Te encoges de hombros al ser incapaz de saber dónde ha ido; reanudas la marcha con precaución y sin perder de vista al grupo.</p>`,
    actions: [
      {
        id: `04`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `148`,
    html: `<p class="asangre cursiva">Has solventado el enigma. Aunque la criatura diera 8 pasos por cada 5 pasos tuyos, esos 8 eran equivalentes a 3 1/5 de tus pasos. De ese modo tú conseguías recuperar 1 4/5 en cada paso tuyo frente a 5 pasos suyos. Esa ventaja de 27pasos queda reducida a 10 4/5 de tus pasos y solo necesitas 6 progresiones de 1 4/5 pasos para atraparlo, lo que es equivalente a 30 pasos para atrapar al fantástico ser que en ese instante habrá recorrido 75 pasos cuando tú le atrapes.</p>

    <p>Rastreas el suelo con cuidado desde la última posición en la que lo viste. Efectivamente, no es muy grande y tampoco pesa demasiado. Los hierbajos apenas están aplastados a su paso. Te agazapas todavía más para evitar ser descubierto. A unos metros por delante, atisbas el tocón de un roble al que te podrías desplazar para ocultarte pero te das cuenta que el rastro que sigues se ha dirigido hacia el otro lado.</p>
  
    <p>En ese momento descubres su escondite. Está observando al grupo desde un desnivel de terreno apenas visible, en el que tú no podrías caber… pero él si. No puedes verlo, pero intuyes su presencia oculta en la sombra, totalmente invisible.</p>
  
    <p>Te mantienes oculto y esperas. Tarde o temprano tendrá que salir.</p>`,
    actions: [
      {
        id: `98`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `149`,
    html: `<p>Turpa avanza imperiosamente, lanzándote una mirada reprobadora.</p>

    <p>—No me puedo creer lo que me acaban de contar tus compañeros de armas. ¿Cómo has osado encararte a ellos para defender a un grupo de apestosos campesinos que no nos respetan? Esperaba mucho más de un Ainari como tú. Apuntabas maneras para convertirte en un orgulloso guerrero de nuestro imperio. Me temo que la influencia del miserable Ritión Zarenyo te ha trastocado el entendimiento… De haberlo sabido, te hubiéramos dejado fuera de combate a ti también en la emboscada.</p>
  
    <p>Las palabras de Turpa te han dejado estupefacto. No solamente es el responsable de las masacres que se llevan a cabo durante las cacerías secretas, sino que además ha simulado la emboscada del campamento para sacarse de encima a tu compañero Zarenyo. Estás furioso y poco te importan las amenazas que te rodean. Recitas mentalmente la secuencia del Protahitéi, dispuesto a entrar en combate contra todos.</p>
  
    <p>—Pobre desgraciado… —continúa Turpa chasqueando los dedos, mientras percibes cómo Taifos levanta su brazo y se dispone a apuntarte con su arco—, no me dejas elecc…</p>
  
    <p>En ese mismo momento, otra flecha surge de la oscuridad y se clava en el muslo del corpulento Taifos, que suelta su arma desplomándose con un grito de dolor mientras se sujeta la pierna. Turpa se ha quedado estupefacto.</p>
  
    <p>Justo cuando acabas de recitar la secuencia y notas que tu cuerpo se contrae por los efectos de la aceleración, ves otra flecha que silba en el aire y se dirige hacia ti, proveniente del arco de Merkar, que se ocultaba detrás del maestro.</p>`,
    actions: [
      {
        id: `187`,
        text: `intentas huir`,
      },
      {
        id: `59`,
        text: `intentas esquivar la flecha`,
      },
    ],
  },
  {
    id: `150`,
    html: `<p>Fingiendo un aparatoso bostezo, rechazas la generosa invitación disculpándote por estar muy cansado. Explicas que prefieres acostarte pronto para estar en forma al día siguiente.</p>

    <p>Deilos se asombra de tu indiferencia y tuerce el gesto decepcionado. El grupo se despide y abandona sigilosamente el campamento. Cuando se alejaban, te ha parecido escuchar la gruesa voz del corpulento Taifos:</p>
  
    <p>—Es un nenaza.</p>`,
    actions: [
      {
        id: `84`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `151`,
    html: `<p>Dejándote llevar más por los recuerdos que por un cálculo exacto, crees recordar que en esa clase no erais más de 25, por lo que 10 alumnos y 8 Ibtahanes te parece el número correcto. Además, el grupo seguramente se habrá internado en el bosque para cazar alguna bestia fantástica.</p>

    <p>Sigues avanzando durante diez minutos más en dirección al tupido bosque. Empiezas a escuchar el murmullo de las ramas mecidas por el viento, alterado por los sonidos de las aves nocturnas. Cuando penetras en la frondosa arboleda, puedes oler, sentir y vislumbrar la maleza que te rodea, impregnada de una humedad empalagosa que moja tu cabello y tu piel bajo la luz de las tres lunas de Tramórea, que proporcionan una mayor visibilidad gracias a la mágica refulgencia de esta noche tan especial. Te detienes junto a un olmo e intentas escuchar algún sonido que revele la posición de la comitiva que intentas alcanzar. Apoyas la mano en la rugosa corteza e intentas concentrarte… sin éxito. Una sensación irreal se apodera de ti y comprendes súbitamente que emana de ese mismo lugar: te has adentrado en el misterioso bosque de Corocín. El hogar de los coruecos, esas bestias enormes y sanguinarias cuyo esqueleto metálico las convierte prácticamente en invencibles.</p>`,
    actions: [
      {
        id: `170`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `152`,
    html: `<p>Enumeras velozmente la secuencia de números y letras, sintiendo al instante una exagerada rigidez en tus riñones. La temperatura de tu cuerpo aumenta súbitamente. Salvo Deilos, que ves aproximarse rápidamente, todo parece haberse vuelto más lento.</p>

    <p>Impulsado por un resorte invisible, brincas desde tu lado de la tapia y agarras a la chiquilla por la cintura, levantándola como si fuera un pequeño fardo. Justo donde te encontrabas medio segundo antes, una flecha se clava en el esponjoso suelo del prado. Encaras la ladera y empiezas a ascender corriendo hacia el bosque; a tu espalda escuchas voces de alarma que provienen de las diferentes chozas.</p>
  
    <p>Te apresuras con todas tus fuerzas pero puedes percatarte con el rabillo del ojo que Deilos te está ganando terreno… Los demás han quedado muy descolgados atrás.</p>
  
    <p>Apenas trescientos metros y llegaréis al bosque. La muchacha intenta debatirse pero se mueve torpemente. Apuras un poco más tu aceleración.</p>
  
    <p>Ciento cincuenta metros. Tienes a Deilos cada vez más cerca.</p>
  
    <p>Cincuenta metros, diez… puedes escuchar como resopla a tu espalda.</p>
  
    <p>De repente sueltas a la chiquilla y te giras ejecutando un Yagartéi intimidatorio que golpea con fuerza la espada que lleva en alto Deilos, haciendo que vuele por los aires.</p>
  
    <p>A pesar de estar desarmado, te mira primero con sorpresa y luego con odio, rechinando entre dientes:</p>
  
    <p>—Te arrepentirás de esto…</p>
  
    <p>Le propinas una patada frontal en todo el pecho que le proyecta violentamente hacia atrás, haciéndole rodar cuesta abajo.</p>
  
    <p>La muchacha se ha incorporado y puedes ver el asombro reflejado en sus ojos. La coges de la mano y reanudáis la carrera hacia el bosque, apurando tus fuerzas antes de que terminen los efectos de tu primera aceleración.</p>
  
    <p>—No creo que sea buena idea —te dice ella resoplando.</p>
  
    <p>—No se me ocurre otra.</p>`,
    actions: [
      {
        id: `46`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `153`,
    html: `<p>Sopesas tus posibilidades antes del inminente enfrentamiento. Para combatir al corueco no tienes demasiadas opciones.</p>

    <p>Puedes intentar la Yagartéi (desenvainar la espada y a la vez dar un tajo de izquierda a derecha) colocándote debajo del corueco cuando salte, rezando para poder rajarle las tripas.</p>
  
    <p>O puedes entrar en Protahitéi (la aceleración que incrementa tu velocidad y rendimiento físico en un cincuenta por ciento), con la esperanza de que esa bestia no sea tan rápida como aparenta.</p>`,
    actions: [
      {
        id: `35`,
        text: `decides lanzar una Yagartéi cuando salte el corueco`,
      },
      {
        id: `43`,
        text: `entras en Protahitéi`,
      },
    ],
  },
  {
    id: `154`,
    html: `<p>Rastreas toda la zona en busca de la muchacha hasta que por fin te parece avistar un pequeño bulto apoyado contra un viejo olmo apartado. A medida que te vas acercando te preocupa constatar que la pequeña figura está encogida e inerte, por lo que barruntas algún fatal desenlace. Deseas que solamente esté dormida, por lo que te acercas a ella con sumo cuidado, acariciándole el pelo con delicadeza y suspirando aliviado cuando escuchas su respiración pausada. Al notar el roce de tu mano por sus mejillas, abre los ojos súbitamente y se asusta.</p>

    <p>—Soy yo —le dices con ternura.</p>
  
    <p>La chiquilla abre los ojos como platos y te inspecciona de arriba hasta abajo.</p>
  
    <p>—Pero… ¿cómo has podido sobrevivir al corueco? ¡Ni siquiera pareces herido!</p>
  
    <p>Emocionada y con los ojos llorosos, te abraza con ternura.</p>
  
    <p>—Me alegro de que estés vivo… ¿Cómo lo has hecho?</p>
  
    <p>Te sonrojas al contacto de su espontáneo abrazo y le contestas sonriendo:</p>
  
    <p>—Kartine me ha sido favorable… y un viejo mago tuerto me ha salvado justo a tiempo.</p>
  
    <p>La chica pone los ojos en blanco y resopla con incredulidad.</p>
  
    <p>—No me lo creo. La leyenda del viejo tuerto loco que se esconde en el bosque de Corocín es tan antigua que es imposible que esté vivo a día de hoy.</p>`,
    actions: [
      {
        id: `171`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `155`,
    html: `<p>Examinas con atención el prado que se extiende ante vosotros: una pequeña aldea de campesinos, con chozas aisladas y huertos que se delimitan unos a otros con pequeños cercados o alguna tapia. Al otro extremo, la ladera asciende bastante rápidamente para dar paso a un bosque de aspecto fantasmagórico que domina toda la aldea, con robles y fresnos gigantescos que parecen estar vigilando el diminuto poblado que se extiende ante ellos. Algo amenazador y sobrenatural parece emanar de aquella arboleda.</p>

    <p>—Es el bosque de Corocín —te dice Dedos, que se ha percatado de tu interés por el paisaje—. Por nada del mundo me metería ahí dentro.</p>
  
    <p>A diferencia de antes, su tono es ahora respetuoso, incluso te parece que alberga un temor contenido.</p>
  
    <p>—Tiene un aspecto siniestro —concedes.</p>
  
    <p>—Dicen que en su interior hay bestias muy peligrosas, y por supuesto, coruecos.</p>
  
    <p>Los coruecos; unas bestias temibles prácticamente invencibles, te parece recordar. Se rumorea que su piel es un armazón metálico y que sus presas favoritas son los humanos…</p>
  
    <p>Sientes una repentina agitación al imaginarte que quizá ése sea el objetivo de la cacería secreta… hasta que Taifos sale del bosque con gesto satisfecho, interrumpiendo tu reflexión.</p>`,
    actions: [
      {
        id: `03`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `156`,
    html: `<p>Sin dejar de controlar los movimientos del grupo, examinas con atención el prado que se extiende ante vosotros. Una pequeña aldea de campesinos, con chozas aisladas y huertos que se delimitan unos a otros con pequeños cercados o alguna tapia. Varios senderos rodean los cercados de las huertas y cabañas de los campesinos. La aldea está en silencio; es muy tarde y todos duermen.</p>

    <p>Al otro extremo, la ladera asciende bastante rápidamente para dar paso al bosque de aspecto fantasmagórico que domina toda la aldea, con robles y fresnos gigantescos que forman una especia de muralla natural, como si fueran las defensas de un sombrío castillo. Tiene un aspecto siniestro.</p>
  
    <p>Bhratar y Tauldos apuran el último odre; parecen bastante eufóricos. Deilos y Merkar señalan hacia la aldea e intercambian impresiones. Te parece que Dahzor está un poco bebido, mientras intenta seguir socializando con los componentes de la expedición.</p>
  
    <p>Al rato aparece Taifos, más relajado, incorporándose al grupo. Reemprenden la marcha, esta vez con más sigilo y adentrándose con cuidado por el sendero que va hacia la aldea.</p>`,
    actions: [
      {
        id: `147`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `157`,
    html: `<p>Avanzáis con cuidado por el resbaladizo suelo que bordea el riachuelo, con la esperanza de que os guíe fuera de este fantasmagórico bosque. Camináis en silencio, con todos los sentidos en alerta, aunque no puedes dejar de sonreír al ver que ella aprovecha para coger moras en los zarzales y comérselas con auténtica devoción. Continuáis vuestro avance con cautela y al rato te sonríes al verla dar un traspiés… pero en vez de incorporarse, se acurruca junto a unos helechos.</p>

    <p>—Pero ¿qué haces? —le preguntas extrañado—. ¡Tenemos que seguir!</p>
  
    <p>—Solo un momentito… Necesito dormir un rato…</p>
  
    <p>Sospechas que esas moras podrían tener efectos somníferos secundarios. El lugar parece apacible y eso te inquieta todavía más. Avanzas unos cuantos pasos, sin perder de vista a la chiquilla que duerme plácidamente.</p>
  
    <p>El regato inicia un recoveco; lo recorres hasta verlo desaguar en algo que parece una oscura poza maloliente. Las fétidas aguas tienen un aspecto fangoso y sobre ellas puedes ver restos de un cañaveral putrefacto recubierto de talofitas hediondas. No solamente por el olor tienes la impresión de haber llegado a un punto muerto.</p>
  
    <p>«Tendremos que volver sobre nuestros pasos», piensas mientras bostezas aparatosamente.</p>
  
    <p>Intentas desperezarte, pero un persistente amodorramiento se apodera de ti. Intentas recuperarte haciendo muecas y estirando los músculos, pero sigues notando esa incómoda modorra. ¿Acaso el agua estaba envenenada? Mientras luchas contra la somnolencia, te adormeces sentado junto a una roca.</p>`,
    actions: [
      {
        id: `166`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `158`,
    html: `<p>Encaras el estrecho prado. A los lados, unos inmensos árboles se alzan y forman una oscura y siniestra cúpula. Cuando progresas por la pradera aspiras el perfume dulzón que empapa el ambiente. Te aproximas al otro extremo del claro, dispuesto a adentrarte nuevamente en la espesura, cuando de pronto escuchas unos gruñidos roncos que se aproximan. En la oscuridad del bosque logras distinguir los destellos rojizos de unos ojos envueltos en sombras; te da la sensación de que son lobos salvajes. Y parece que te están observando. Intentando conservar la calma, contabilizas tres o cuatro criaturas. Dos de ellos se adelantan y se dibujan en el prado, gruñendo en tono bajo e intenso. Son lobos enormes, de aspecto terrible y feroz. El más grande tiene un pelaje de color plomizo, con una cresta blanca sobre el lomo. Se desplaza con lentitud. Sin dejar de gruñir, describe un amplio círculo, como si quisiera rodearte.</p>

    <p>Tensas tu arco sin dejar de mirarle; el animal reacciona de inmediato encogiendo el morro y mostrando su feroz dentadura un breve instante.</p>
  
    <p>Un tercer lobo surge de la oscuridad y se mueve con sigilo hacia el otro lado, moviéndose en dirección contraria. Los cuatro lobos te han rodeado lentamente, sin acercarse. El lobo de mayor tamaño es francamente enorme. Sin duda es el jefe de la manada. Poco a poco, se aproxima sin dejar de mirarte, como si te estuviera estudiando. Finalmente, se detiene a pocos metros de ti y emite un sonido grave y tenue.</p>`,
    actions: [
      {
        id: `137`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `159`,
    html: `<p>Adviertes claramente que está apuntando al pecho de Deilos. Tu lealtad a la academia y tu desconfianza hacia ese individuo te provocan sentimientos contrapuestos; las normas de Uhdanfiún son muy estrictas: no desenvainar las espadas contra unos compañeros.</p>

    <p>La cuerda del arco de la muchacha emite un leve crujido al tensarse.</p>
  
    <p>Estás hecho un lío, pero tienes que tomar una decisión de inmediato.</p>`,
    actions: [
      {
        id: `50`,
        text: `entras en Protahitéi`,
      },
      {
        id: `18`,
        text: `apuntas tú también a Deilos`,
      },
    ],
  },
  {
    id: `160`,
    html: `<p>Aprovechas el recodo que hace el camino para avanzar velozmente y acercarte al otro extremo de la cabaña. Ves que parte del grupo sigue avanzando en silencio, para franquear la cerca. Brathar y Tauldos están en la parte inferior del sendero, vigilando el camino por el que han venido. Merkar está junto a la cerca que da acceso a la cabaña, con el arco cargado y tensado a la altura de la cintura. Deilos, Taifos y Dahzor avanzan por el huerto. Extrañado, te estás preguntando si la cacería secreta consiste en robar gallinas a los campesinos, cuando escuchas el sonido ahogado de unas pisadas a unos metros de tu posición.</p>

    <p>Un perfil pequeño y encapuchado se acaba de atrincherar detrás de la tapia en la que te acabas de ocultar, a unos metros de ti. Te hace una señal para que acudas a su lado.</p>`,
    actions: [
      {
        id: `141`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `161`,
    html: `<p>Tu corazón se ha acelerado desde que estás acechando al misterioso personaje. Consideras que este incidente es tu «cacería secreta» personal y de momento está resultando mucho más apasionante que seguir a Deilos y los suyos. Para garantizar una correcta aproximación, no has dudado en rodear holgadamente a tu objetivo, asegurándote de que no pueda descubrirte. Ahora avanzas por la misma ladera que él, reptando desde una situación algo más elevada sobre la pendiente, de manera que casi puedes tener en el mismo punto de mira a tu presa y al grupo que percibes a lo lejos y en segundo plano. Desde esta ventajosa posición has podido apreciar mucho mejor el aspecto del pequeño individuo misterioso que está espiando a la banda de Deilos.</p>

    <p>Aunque solo lo has podido ver un instante de espalda, incorporándose para estudiar los movimientos del grupo, has conseguido descubrir que además de ser pequeño va armado, aunque de momento solo has visto el arco corto y la aljaba que lleva a la espalda. El resto del cuerpo está disimulado debajo de una capa con capucha que recubre su cabeza, pero no te ha parecido que tenga una complexión fuerte, sino más bien todo lo contrario.</p>
  
    <p>Está realmente atraído por el grupo de Deilos, que sigue avanzando y bordeando los cercados de los huertos. Crees que será una presa fácil, pero no quieres arriesgarte a que os descubran los que están más abajo. Tendrás que actuar con decisión, velocidad y acierto para no ser descubierto. Un ejercicio que habéis practicado a menudo en la academia, pero que todavía no has puesto en practica sobre el terreno.</p>
  
    <p>Intentas avanzar al mismo tiempo que él, cubriendo más distancia para acercarte progresivamente sin hacer ruido. Has reducido la distancia en menos de cien metros. Ahora recortas de nuevo la distancia en la mitad. Estás cada vez más cerca. Te has agazapado como un gato que se dispone a cazar al ratón despistado, y vas a saltar ya.</p>`,
    actions: [
      {
        id: `66`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `162`,
    html: `<p>Has dado un amplio rodeo para situarte a su espalda. Se ha recortado en el cielo su figura por un instante. Has podido ver que lleva una especie de capa con capucha y un arco corto colgado a su espalda. Al otro lado y mucho más lejos, distingues a Deilos y los otros, que avanzan agazapados bordeando los cercados de los huertos. No parece que se hayan percatado todavía de tu ausencia.</p>

    <p>Avanzas lo más rápido que puedes sin delatar tu presencia y extremando todas las precauciones para no hacer nada de ruido.</p>
  
    <p>Cien metros… Setenta y cinco… Cincuenta… Sonríes al pensar que podrás presumir de haber sido el más astuto de esta cacería secreta. Veinte… Diez… Cinco… Tres… Dos…</p>
  
    <p>Te dispones a saltar sobre él.</p>`,
    actions: [
      {
        id: `65`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `163`,
    html: `<p>Para intentar recuperar la pista perdida, decides calcular la distancia que os puede separar, basándote en la progresión que ambos habéis tenido desde que iniciaste el seguimiento.</p>

    <p>El extraño personaje te llevaba veintisiete pasos de ventaja cuando lo descubriste. Por cada cinco pasos que avanzabas, él daba ocho. Pero debido a su reducido tamaño, cada dos pasos tuyos equivalen a cinco de los suyos. Con esa información, eres capaz de calcular cuántos pasos necesitabas para atrapar a la criatura fantástica y por lo tanto intuir dónde se oculta…</p>`,
    actions: [
      {
        id: `136`,
        text: `piensas que en cuarenta pasos lo atrapabas`,
      },
      {
        id: `148`,
        text: `crees que en treinta pasos lo alcanzabas`,
      },
    ],
  },
  {
    id: `164`,
    html: `<p>Cuando parecía que todo iba a terminar y te disponías para un desenlace fatídico, el corueco se detiene, borbotea y retrocede fijando su gualda mirada algo más arriba, a tu espalda. Una insólita refulgencia celeste se refleja sobre su busto haciendo que el corueco rezongue exacerbado. Se zarandea con exasperación, pero continúa replegándose hasta que penetra de nuevo en el follaje, dejando tras de si un hedor nauseabundo y un diminuto rastro de sangre.</p>

    <p>Te preguntas con cierto resquemor que debe ser lo que hay a tu espalda para que haya conseguido ahuyentar a un corueco. Muy lentamente, te das la vuelta para presenciar una extraordinaria visión: un hombre espigado parece flotar sobre el suelo y desciende lentamente, rodeado por un halo azulado que resplandece. Su rostro es aristado, su ojo derecho está tapado por un parche oscuro y lleva una larga cabellera blanca con una trenza que reposa en su hombro. Lleva un manto que le llega hasta sus pies descalzos y sostiene un báculo de madera tallada en la que se puede ver el relieve de una serpiente enroscada alrededor. A medida que toma contacto con el suelo, la reverberación luminosa decrece hasta desaparecer.</p>
  
    <p>—¿Qué extraños motivos te han traído de noche hasta este bosque para enfrentarte a un corueco?</p>
  
    <p>Te excusas torpemente y le agradeces la ayuda, explicando que te has perdido en el bosque por error. Te presentas y le confiesas tu sorpresa al verle, preguntándole su nombre, mientras recoges tu espada.</p>
  
    <p>—Estoy donde me corresponde y éste es mi retiro espiritual. Me llamo Linar, pero no creo que eso importe puesto que ya no mantengo contacto con la civilización. Me has dicho que te has perdido, muchacho. ¿Se puede saber adónde te dirigías?</p>
  
    <p>Te resulta imposible dar un respuesta precisa y decides explicarle que estabas siguiendo a un grupo de guerreros de Uhdanfiún para descubrir en qué consiste el misterio de la cacería secreta.</p>
  
    <p>—Interesante. Puedo intentar localizarlos, pero para ello necesitaría pasar por casa. Si te apetece tomar algo, estás invitado.</p>`,
    actions: [
      {
        id: `42`,
        text: `le pides a Linar que te lleve hasta los lindes del bosque`,
      },
      {
        id: `76`,
        text: `aceptas su invitación`,
      },
    ],
  },
  {
    id: `165`,
    html: `<p>Intuyendo que el asalto puede provenir de un terraplén que se alza sobre vuestra zona de vivaque, decides contraatacar y zigzagueas velozmente saliendo de la zona atacada para intentar flanquear y sorprender a vuestros atacantes.</p>

    <p>Sorteas varios obstáculos y te resguardas en árboles y rocas para seguir avanzando. Un roble tras el que te parapetas acaba de recibir el impacto de un gran piedra, por lo que deduces que han intuido tu maniobra.</p>
  
    <p>Escuchas a lo lejos un grito. Han alcanzado a alguien en el campamento.</p>
  
    <p>La distancia que os separa es cada vez menor y apenas dispondrás de cobertura para acercarte sin correr el riesgo de que te golpee alguno de esos proyectiles.</p>`,
    actions: [
      {
        id: `13`,
        text: `continuas acercándote`,
      },
      {
        id: `139`,
        text: `te mantienes a resguardo para pensar en otra alternativa`,
      },
    ],
  },
  {
    id: `166`,
    html: `<p>Cuando por fin despiertas, no tienes ninguna noción del tiempo transcurrido. Sin embargo, tienes la certeza de que el lugar ya no es el mismo que antes. Ahora notas sutiles y embriagadores aromas que perfuman el aire, y escuchas un armonioso zumbido que resulta melódico y fascinante, con unas cristalinas risas de fondo…</p>

    <p>Todavía permaneces inmóvil cuando te ha sorprendido esa última percepción y decides contemplar de donde proviene tal regocijo… la poza es ahora una charca de aguas cristalinas, bañada por una exótica luz verdosa que le da un aspecto feérico. Y entonces las ves jugar.</p>
  
    <p>Son tres preciosas y bellas doncellas que se divierten en la orilla, chapoteando en el agua con sus pies desnudos. Llevan unas especies de clámides que resaltan sus cuerpos perfectos. Ahora te sonríen con picardía y se alzan para saltar por la orilla, persiguiéndose en una especie de juego. Retozan sobre el mullido musgo y se aúpan sobre las rocas, sacudiendo sus sugestivas cabelleras al viento. Una espectacular rubia de ojos azules exhibe una dorada melena que le cae por la cintura; la otra tiene el pelo negro como el ébano y un color de piel acaramelado; la tercera agita su rizada cabellera pelirroja como si estuviera prendida en llamas y sus ojos de esmeralda son espectaculares.</p>
  
    <p>Como si estuvieran flotando, se han ido acercando a ti.</p>
  
    <p>La morena se pone a gatear y sus ojos oscuros brillan en la oscuridad.</p>`,
    actions: [
      {
        id: `87`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `167`,
    html: `<p class="asangre cursiva">Has solventado el enigma. Teniendo en cuenta que nadie se hace una reverencia a si mismo y que el Tahedorán no devuelve las reverencias que se le hacen, puedes deducir que la raíz cuadrada de 900 (saludos) te permite descubrir el número total de asistentes a la clase: treinta. Si un tercio son maestros menores, hay diez Ibtahanes y veinte alumnos.</p>

    <p>Con la mente mucho más clara, avanzas con cautela, buscando pistas que te confirmen el paso del grupo. La maleza aplastada y las huellas de pasos te lo ratifican. Incluso puedes distinguir que han hecho paradas. No da la sensación que sean muy cautelosos en su avance.</p>
  
    <p>Cuando estás llegando al final de la quebrada, puedes ver una loma guarnecida con una frondosa alameda. Avanzas con mucho cuidado.</p>
  
    <p>Te llega el sonido de tenues voces e incluso te ha parecido ver alguna sombra en movimiento.</p>`,
    actions: [
      {
        id: `95`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `168`,
    html: `<p>Abres los ojos, incapaz de saber cuánto tiempo has dormido. Estás sentado, apoyado junto a una gran roca, con la mente en blanco. El lugar parece haber cambiado y una extraña luz verdosa tiñe los alrededores dándole un aspecto feérico. Al mirar hacia la charca, ves a tres jóvenes y hermosas mujeres que ríen y juguetean en la orilla, vestidas con sutiles túnicas que cubren sus esbeltos cuerpos. Van descalzas y corretean por la ribera, subiéndose a las rocas y agitando sus preciosas melenas al viento: una morena como el azabache, otra rubia como el oro y la tercera pelirroja como el fuego.</p>

    <p>Entre saltos y juegos se acercan hasta ti; la morena se sienta a tu lado y apoya su cabeza en tu hombro. Su pelo te cosquillea los dedos; ella te mira con languidez y te sonríe misteriosamente.</p>
  
    <p>—Estás en el lugar idóneo y con la mejor compañía; quédate con nosotras.</p>
  
    <p>Esas palabras susurradas a tu oído te hacen perder la cabeza. Al otro lado, la rubia te acaricia el pelo y roza tus orejas con sus finos dedos. Sientes una agradable sensación en la nuca.</p>
  
    <p>—Ven a bañarte con nosotras.</p>
  
    <p>La sugerente voz de la pelirroja te hipnotiza y sus verdes ojos te parecen los más hermosos que jamás hayas visto. Su larga melena rizada se agita al viento caprichosamente y da la sensación de que unas llamas rodean su hermoso cuerpo.</p>
  
    <p>Las tres ninfas te incorporan y te rodean. Te cogen de la mano, acercándote al agua, que ahora ves brillante y luminosa, como si hubiesen piedras preciosas en el fondo. Intentas resistir a la sensación que te invade pero sientes el poder de atracción del agua y de la compañía de esas mujeres, por lo que empiezas a desvestirte.</p>`,
    actions: [
      {
        id: `82`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `169`,
    html: `<p>Intimidado por la misteriosa presencia en plena noche y teniendo en cuenta la reciente emboscada que habéis sufrido, crees que «FRENO» es la mejor alternativa ante semejante aparición.</p>

    <p>Te muestras por lo tanto precavido al avanzar; y mientras le preguntas su nombre, echas mano a la empuñadura de tu espada y la desenvainas lentamente, apuntando con la kisha a la extraña joven que te has encontrado en medio de la noche. Con voz clara y grave, la muchacha contesta.</p>
  
    <p>—Tríane.</p>
  
    <p>Apenas has desviado la mirada una milésima de segundo para mirar dónde pisas… Y ya no está. No has escuchado ningún sonido que te permita saber adónde ha ido, si ha huido o simplemente ha desaparecido tan misteriosamente como te la encontraste hace un instante.</p>
  
    <p>Reanudas tu ronda rodeado por un opresivo silencio, poniendo todavía más atención y con la molesta sensación de que te están observando fijamente.</p>`,
    actions: [
      {
        id: `24`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `170`,
    html: `<p>De pronto, escuchas el imperceptible ruido de la hojarasca pisoteada. Un sensación de pánico te invade pero apelas a tu entrenamiento militar e hincas una rodilla al suelo para esperar lo que está avanzando hacia ti. Las palabras de tu instructor en supervivencia resuenan en tus oídos: «Mantén la calma o serás tú quien te conviertas en la presa». Se acerca. Ya puedes olerlo. Ajustas tu posición para encararlo, mientras el aire se impregna de un hedor metálico muy característico. Las ramas se mueven. Un ronco sonido anticipa el rugido y la presencia de la gran bestia: un corueco.</p>`,
    actions: [
      {
        id: `39`,
        text: `te dispones para el combate`,
      },
      {
        id: `179`,
        text: `prefieres salir huyendo`,
      },
    ],
  },
  {
    id: `171`,
    html: `<p>—Pues ese viejo tenía una forma envidiable y unas zancadas que a duras penas podía seguir. Y tú, ¿cómo conseguiste salir de Corocín?</p>

    <p>—La verdad es que no estoy segura. Simplemente corrí sin descanso y sorprendentemente, cuando iba a darme por vencida, encontré un estrecho sendero y logré escapar de este maldito laberinto.</p>
  
    <p>Cuando la estás ayudando a incorporarse, ambos escucháis una suave melodía que parece proceder de las entrañas del mismísimo bosque. Ella sonríe con nostalgia:</p>
  
    <p>—Conozco esa música. Hace tiempo que no la escuchaba. Dicen que es la música del bosque de Corocín. Es reconfortante.</p>
  
    <p>Tienes el extraño presentimiento de que el viejo mago que has conocido hace un momento tiene algo que ver con esa melodía que estáis escuchando.</p>
  
    <p>—¿Qué quieres hacer ahora?</p>
  
    <p>—Tengo que denunciar lo sucedido a nuestros maestros, exigir justicia para los campesinos y castigo para los culpables. Si quieres, me puedes acompañar para corroborar los hechos que les voy a relatar.</p>
  
    <p>—No cuentes conmigo. No me fío de los guerreros de Uhdanfiún… o al menos de la gran mayoría de ellos.</p>
  
    <p>—No puedo tolerar que esa vileza quede impune.</p>
  
    <p>—Te comprendo. Te acompañaré durante una parte del trayecto. Luego nos despediremos.</p>`,
    actions: [
      {
        id: `104`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `172`,
    html: `<p>Corres hacia la entrada de la choza, temiendo lo peor.</p>

    <p>—¿Qué estáis haciendo, imbéciles?</p>
  
    <p>Tu grito resuena en la noche.</p>
  
    <p>Merkar se gira instintivamente y te dispara. Necesitarás mucha suerte para salir airoso de esta situación.</p>`,
    random: true,
    actions: [
      {
        id: `55`,
        text: `Continuar`,
      },
      {
        id: `05`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `173`,
    html: `<p>El salto del corueco te sorprende, a pesar de tu aceleración. Jamás hubieras pensado que pudiese cubrir esa distancia a tanta velocidad. Tu Yagartéi se estrella contra su brazo y te da la sensación de haber golpeado una columna de piedra. Un latigazo te recorre ambos brazos desde el hombro hasta la punta de los dedos y sueltas la espada con un alarido.</p>

    <p>El corueco está encima de ti y sus malévolos ojillos dorados te observan cruelmente; intentas zafarte usando tu aceleración pero la bestia intuye tu intención y te propina un zarpazo que te impacta sin que puedas esquivarlo. Tu cuerpo sale proyectado hacia atrás y sientes como toda tu espalda cruje en mil pedazos cuando chocas contra un ancho roble. Escupes un líquido espeso y dulzón al caer al suelo.</p>
  
    <p>El corueco se acerca lentamente. Intentas moverte en vano. Tu cuerpo no te obedece; tu boca está pastosa y sabe a sangre.</p>
  
    <p>—Ven, pequeño, ven… —balbuceas irónico, intentando llamar su atención. Sabes que vas a morir. Pero ya no sientes nada.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `174`,
    html: `<p>Examinas la herida de la muchacha. La flecha se le ha clavado de abajo hacia arriba y le ha atravesado de parte a parte el abdomen con un movimiento ascendente, llegando hasta el pulmón que ahora se le está inundando de sangre.</p>

    <p>La chica tose de nuevo y escupe un líquido oscuro y viscoso. Te mira por última vez: el cuerpo curtido por el ejercicio, la espada… el brazalete con cinco estrías azules.</p>
  
    <p>—Eres… uno de ellos.</p>
  
    <p>No puedes contestarle, solo la miras en silencio intentando contener las lágrimas.</p>
  
    <p>—No exactamente. Ellos mataron a mi familia. Tú me recuerdas al otro.</p>
  
    <p>Te hace un gesto para que te aproximes. Su aliento calienta tus mejillas. Te acaricia el rostro. Apenas consigue susurrar sus últimas palabras.</p>
  
    <p>—Se llamaba Derguín. Y ese tal Deilos… lo he reconocido. Es el que intentó violarme.</p>
  
    <p>Derguín: recuerdas ese nombre. Fue uno de los alumnos expulsados el año pasado, después de recibir un castigo ejemplar.</p>
  
    <p>Su ojos se cierran lentamente. Ha dejado de respirar.</p>`,
    actions: [
      {
        id: `48`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `175`,
    html: `<p>Tus fuerzas te abandonan. Te sientas, apoyándote en el tronco del árbol y ladeando el cuerpo para no clavarte aún más la flecha que te disparó Merkar. La chiquilla se arrodilla junto a ti y te mira con lágrimas en los ojos. Tu camisa está empapada de sangre y sientes el calor de ese líquido pastoso mientras sigue derramándose y bajando por tu cintura.</p>

    <p>Empiezas a tiritar. La muchacha se quita la capa y te cubre con ella, a la vez que se fija en tu brazalete con cinco estrías azules.</p>
  
    <p>—Eres como ellos, ¿verdad? Un guerrero de Uhdanfiún. Pero en realidad me recuerdas a otro… se llamaba Derguín. También se enfrentó a Deilos cuando quiso violarme.</p>
  
    <p>Recuerdas ese nombre. Los expulsaron a él y a otro alumno llamado Mikhon Tiq el año pasado, después de un severo castigo. Pero no puedes contestarle, solo la miras en silencio intentando mantener la conciencia.</p>
  
    <p>Te acaricia la mejilla. Puedes ver cómo se enjuga las lágrimas con la otra mano. Su rostro desaparece en un túnel cuya oscuridad te invade. Escuchas una voz en tu interior que te recuerda la de la misteriosa Tríane. Te da la sensación de que te está susurrando al oído mientras mueres: no superaste la prueba.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `176`,
    html: `<p>Todo y estando en plena aceleración, la velocidad del corueco te ha cogido desprevenido. Nunca hubieses creído que semejante criatura se desplazara tan velozmente con esa envergadura. El Yagartéi que intentabas realizar ha golpeado su brazo acorazado y el acero rebota vibrando como si le hubieses atizado un tajo a un poste de metal. Un doloroso calambre te atenaza ambos brazos y tu espada se pierde mientras sueltas un gruñido a causa del dolor.</p>

    <p>El corueco te recubre por completo y te estudia con sus perversos ojillos amarillentos. Te revuelcas con rabia para aprovechar al máximo tu Protahitéi e intentas escapar de su control, pero una vez más, el corueco anticipa tu movimiento con una velocidad pasmosa y frustra tus intenciones propinándote un poderoso golpe con su brazo que se estampa en tu pecho y te lanza hacia atrás varios metros en el aire, hasta que te detienes repentinamente cuando tu cuerpo colisiona contra un ancho roble. Sabes que te acabas de romper la espalda por innumerables sitios; te da la sensación de ser una marioneta a la que le han cortado los hilos y resbalas hasta el suelo por el rugoso tronco, totalmente roto. Tu boca se ha empastado y escupes una mezcla de saliva y sangre que te ha subido desde los pulmones.</p>
  
    <p>Tuerces el cuello patéticamente pero eres incapaz de enderezarlo. De hecho, compruebas que tu cuerpo ya no te obedece, mientras el corueco sigue acercándose, con malignas intenciones.</p>
  
    <p>—Ven, pequeño, ven… —farfullas sarcásticamente, para llamar su atención. Toses y escupes nuevamente sangre, pero no sientes ningún dolor. Te dispones a morir, implorando que al menos ella se haya podido salvar.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `177`,
    html: `<p>Al aproximarte a los alrededores del campamento, decides dar un rodeo y entrar con cautela por la zona donde acampan los maestros, con la intención de informarles de la infamia que han cometido Deilos y los suyos. Te desplazas sigilosamente, acercándote a la tienda del maestro Turpa, cuando escuchas su voz con nitidez, que proviene del interior.</p>

    <p>—… reconozco que nunca lo hubiese imaginado. Me parecía un Ainari ejemplar y con un gran futuro por delante. Y por lo que me has contado, resulta que le faltan redaños para castigar a unos campesinos amotinados. Debimos haberle despachado junto con el inútil Zarenyo de Ritión cuando simulamos la emboscada al campamento. Si tiene la osadía de regresar aquí, lamentará no haber muerto. ¿Algún testigo?</p>
  
    <p>En ese momento escuchas la voz de Deilos, después de un leve carraspeo:</p>
  
    <p>—Ninguno, Maese Turpa. Pero por su culpa no pudimos dar el escarmiento en la aldea como estaba previsto. Se tendrá que realizar otra cacería secreta para que los campesinos comprendan que no pueden retrasarse a la hora de pagar los impuestos.</p>
  
    <p>Te alejas de la tienda con una mezcla de consternación e ira en tus entrañas. Atisbas desde tu escondite la presencia de tres figuras vigilando el recinto: son Taifos, Merkar y Bhratar, responsables de montar la guardia ahora. Seguro que te están esperando con instrucciones muy precisas y poco amigables.</p>`,
    actions: [
      {
        id: `49`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `178`,
    html: `<p>—Os lo agradezco, pero no creo que sea buena idea desproteger el campamento después de la emboscada que hemos sufrido. Además, me preocupa la salud de Zarenyo. En otra ocasión quizá.</p>

    <p>Deilos te mira fijamente, intentando averiguar si tu excusa es sincera o si estás poniendo su autoridad en entredicho. Parece que este nuevo desplante le ha irritado definitivamente.</p>
  
    <p>—Zarenyo ha demostrado que no es merecedor de pertenecer a Uhdanfiún; no tiene lo necesario para ser guerrero. Allá tú si quieres perder el tiempo con ese Ritión. Vámonos —sentencia dirigiéndose al resto del grupo.</p>
  
    <p>El grupo abandona sigilosamente el campamento.</p>`,
    actions: [
      {
        id: `84`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `179`,
    html: `<p>Te das la vuelta y empiezas a correr todo lo rápido que puedes. A tu espalda puedes oír cómo las ramas se resquebrajan, el suelo tiembla y sus pisadas retumban al acercarse… hasta el punto de hacerte perder el equilibrio. También sientes el hediondo olor metálico a tu espalda que se aproxima rápidamente, puedes oler un apestoso aliento en tu nuca y sentir una pegajosa sensación…</p>

    <p>No te has podido girar. Ni siquiera sabes qué aspecto tiene esa fantasmagórica bestia.</p>
  
    <p>Un crujido. Todo ha terminado de golpe. Estás muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `180`,
    html: `<p>Mientras bebes puedes percibir que ella te está estudiando con detenimiento. Lo que has hecho anteriormente la ha asombrado, pero ahora parece recapacitar al fijarse en ciertos detalles, como el brazalete con las cinco estrías que te identifica como un Ibtahán de quinto grado.</p>

    <p>—¿Los conocías, verdad? Tú también eres un guerrero de Uhdanfiún…</p>
  
    <p>La miras en silencio, sin contestar. Te gustaría reconfortarla y decirle que no eres como ellos y que puede confiar en ti, pero las palabras se te atragantan. Ella te sigue mirando con curiosidad.</p>
  
    <p>—Me recuerdas a alguien. Quizá lo conozcas. Me salvó la vida cuando esos energúmenos estaban a punto de violarme. Se llamaba Derguín…</p>
  
    <p>El nombre te resulta muy familiar. Haces memoria y te acuerdas de inmediato: un excelente alumno de la academia. El año pasado, por estas mismas fechas aproximadamente, él y su amigo Mikhon Tiq eran castigados con severidad y expulsados de la academia. No recuerdas claramente los motivos…</p>
  
    <p>—Sucedió hace un año.</p>
  
    <p>Ves que al evocar esos recuerdos su rostro se vuelve triste y sombrío. Prefieres no decirle toda la verdad.</p>
  
    <p>—No lo llegué a conocer personalmente. Ya no está en la academia.</p>
  
    <p>—Sin duda hizo lo más sensato.</p>
  
    <p>Sus palabras te intrigan pero prefieres no preguntar nada. Optas por cambiar de conversación.</p>
  
    <p>—Tendríamos que continuar.</p>`,
    actions: [
      {
        id: `157`,
        text: `quieres avanzar bordeando el arroyo`,
      },
      {
        id: `101`,
        text: `prefieres atravesar el pequeño prado`,
      },
    ],
  },
  {
    id: `181`,
    html: `<p>La velocidad del corueco es tan pasmosa que no has tenido tiempo de saltar para colocarte debajo de él. Desenfundas y la hoja de tu espada impacta en uno de sus brazos, partiéndose en el acto. Los músculos de tus hombros se desgarran al recibir la vibración tras golpear con la hoja sus huesos metálicos. Estás totalmente desarmado e indefenso. El corueco fija sus amarillas y minúsculas retinas en tu aterrorizado rostro y te propina un súbito revés con su poderoso brazo. Todo ocurre tan velozmente que en ese mismo instante notas un tremendo golpe en tu pecho y tu cuerpo sale proyectado hacia atrás con violencia, para detenerse dolorosa e inesperadamente, cuando golpeas algo duro que te destroza la columna vertebral. No puedes moverte y solo sientes que tu cuerpo resbala hacia el suelo sin control, como un títere al que le han cortado los hilos. Tu entorno se desvanece con lentitud. Lo último que notas es la sombra del corueco avanzando hacia ti, para contemplar tu último suspiro.</p>

    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `182`,
    html: `<p>El potente sonido del cuerno inunda toda la aldea.</p>

    <p>Taifos se sobresalta y mira en vuestra dirección justo a tiempo para ver cómo la chiquilla le apunta y suelta la cuerda de su arco, liberando una flecha que se dirige hacia él. Se lanza hacia un lado y rueda sobre el suelo ágilmente, esquivando el proyectil que se clava en la cerca donde estaba apoyado segundos antes.</p>
  
    <p>—¡Allí! —grita Taifos olvidando por completo toda discreción y señalando a la muchacha.</p>
  
    <p>La niña carga otra flecha renegando entre dientes.</p>
  
    <p>—Será idiota…</p>
  
    <p>En la aldea empiezan a oírse gritos de alarma. Deilos y Merkar corren hacia vosotros; mientras que Taifos se incorpora. De pronto observas que Deilos corre mucho. Se ha embalado súbitamente y pasado por delante de Taifos a toda velocidad; lo tendréis encima en un santiamén.</p>
  
    <p>Solo tienes una opción: entrar tú también en segunda aceleración Protahitéi.</p>`,
    actions: [
      {
        id: `78`,
        text: `vas a enfrentarte a Deilos`,
      },
      {
        id: `152`,
        text: `intentas salvar a la chiquilla y salir huyendo`,
      },
    ],
  },
  {
    id: `183`,
    html: `<p>Todo a tu alrededor parece haberse quedado inmóvil, como si estuvieras en un cuadro. Todo, salvo el corueco, que ha saltado sobre ti con una velocidad sorprendente, teniendo en cuenta que estás en Protahitéi. Apenas has tenido tiempo para desenvainar tu espada que su enorme cuerpo te cubría casi por completo. A duras penas has conseguido hacerte a un lado. Te dispones a contraatacar pero ya se ha dado la vuelta otra vez y te encara con su diabólica y dorada mirada.</p>

    <p>Intentas situarte a su costado pero lo tienes nuevamente encima. Te lanza un zarpazo que intentas detener con tu espada, pero te la arranca de cuajo y el arma sale volando a lo lejos.</p>
  
    <p>Te lanzas hacia delante con una acrobática voltereta para intentar recuperarla, pero algo te impacta en pleno pecho. Es su demoledor brazo, que tiene la consistencia de un bloque de granito. Sales volando por los aires sin respiración hasta que chocas contra el tronco de un ancho árbol y te derrumbas sobre la hierba. Te quedas sin aliento en el suelo, intentando no perder la conciencia… sospechas que como mínimo te ha roto varias costillas. Tienes sangre en la boca. No puedes levantarte. No sientes las piernas. Y no puedes evitar el mazazo que se te viene encima y te aplasta definitivamente. Todo sucede tan rápido que ni siquiera te da tiempo a agonizar.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `184`,
    html: `<p>Sentado en cuclillas y apoyado contra un fresno que te oculta en la sombra, contemplas el ajetreo que se está produciendo en el pago, algo más abajo. Junto a ti, la chiquilla te mira desconsoladamente, sin atreverse a tocar la flecha que está hundida en tu pecho. Tu camisa está empapada de sangre y sientes el calor de ese líquido viscoso mientras sigue derramándose y bajando por tu cintura.</p>

    <p>Ella te está examinando con esmero, descubriendo quién eres realmente: tu cuerpo curtido por el ejercicio, tu espada al cinto… tu brazalete con cinco estrías azules.</p>
  
    <p>—Eres… como ellos.</p>
  
    <p>No puedes contestarle, solo la miras en silencio; quieres permanecer consciente. Te das cuenta de que su rostro está empapado en lágrimas pero no tienes fuerzas para consolarla.</p>
  
    <p>—No exactamente. Ellos mataron a mi familia. Tú me recuerdas al otro.</p>
  
    <p>Se acerca lentamente, muy cerca. Su aliento calienta tus mejillas. Sus lágrimas tocan tu rostro. Te besa en los labios suavemente.</p>
  
    <p>—Se llamaba Derguín.</p>
  
    <p>El nombre te suena, pero eres incapaz de recordar, apenas te puedes mantener despierto. Ella parece darse cuenta de que te estás muriendo. Te acaricia la mejilla con una mano, con la otra se enjuga las lágrimas. Se oculta el rostro con la capucha, da media vuelta y se aleja de ti.</p>
  
    <p>Su pequeña figura desaparece en un túnel cuya oscuridad te invade. En tu interior escuchas una voz que te recuerda la de Tríane, susurrándote al oído mientras mueres: «No lograste superar la prueba».</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `185`,
    html: `<p>Avanzas hacia las aguas sujetando por la cintura a tus hermosas acompañantes; la fascinante morena, la rubia espectacular y la maravillosa pelirroja, que te acaricia la nuca desde atrás. En la orilla de la poza, las tres bellezas te ayudan a desprenderte de tu equipo. Te quitan las botas y desabrochan el cinto del que cuelga tu espada, que cae envainada sobre el esponjoso suelo junto al arroyo. La rubia te sujeta la mano con dulzura y se acerca a la orilla.</p>

    <p>Seguís avanzando y ya puedes notar el agua bajo tus pies. La morena se acerca a tu espalda y posa sus manos sobre tus hombros, para que podáis bascular los cuatro en las aguas de la charca. Os sumergís juntos en líquido templado, en el preludio de un prometedor desenlace…</p>
  
    <p>Al poco rato te percatas de que te estás quedando sin aire, por lo que intentas volver a nadar hacia la superficie para respirar nuevamente… pero ellas continúan descendiendo hacia las profundidades. Forcejeas en vano, sus cuerpos son como losas que te arrastran al fondo. Te entra el pánico y abres la boca, tragando agua con sabor a lodo. Quieres liberarte y te agitas frenéticamente, pero sus esbeltas piernas que te rodeaban se han convertido en largas colas de serpiente. Tienes otro ataque de pavor y vuelves a tragar agua que ahora te sabe a fatídico infortunio. Descubres algo tarde que esas irresistibles mujeres son en realidad una Niryiin que ahora te arrastra hacia una espeluznante muerte.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `186`,
    html: `<p>Efectúas una contorsión arriesgada para tratar de evitar la kisha de Deilos. Aunque estés en plena aceleración, tan solo has conseguido apartarte levemente de su estocada y sientes la fría hoja de acero que se hunde por encima de tus riñones, provocando un dolor lacerante que recorre toda tu columna. Escuchas cómo la espada que volaba se clava en la pared. Taifos acaba de derribar al niño que acabas de salvar, silenciando sus sollozos con una brutal patada. El suelo está pegajoso y húmedo. Un fuerte olor a sudor y sangre invade la estancia.</p>

    <p>Dahzor se ha quedado pasmado y solo consigue tartamudear tu nombre.</p>
  
    <p>Taifos te lanza un poderoso tajo con todas sus fuerzas; te parece que también ha entrado en Protaaah… pero nunca lo sabrás.</p>
  
    <p>Todo se ha vuelto oscuro y silencioso de repente. Estás muerto.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `187`,
    html: `<p>Te giras velozmente para huir. A tu espalda resuena la voz de Turpa gritando: «¡Acabad con él!».</p>

    <p>Apenas haz dado dos zancadas cuando sientes que algo te golpea secamente, proyectándote hacia delante; es el impacto de la flecha lanzada por Merkar. Y se acaba de clavar por debajo de tu omoplato.</p>
  
    <p>Quieres seguir corriendo pero las piernas te flaquean y un dolor intenso lacera tus vísceras. Trastabillas y caes de rodillas. Alzas la mirada con dificultad y distingues a lo lejos una diminuta figura que sostiene un arco; te percatas que está sollozando. Levantas tu brazo hacia ella y le imploras:</p>
  
    <p>—¡Huye insensata!</p>
  
    <p>La cruel voz de Deilos resuena en tus oídos cuando le escuchas acercarse. Por el rabillo del ojo, puedes escuchar su voz y adivinar la sombra de su espada que se abate sobre tu cuello, sin contemplación.</p>
  
    <p>—Todo ha terminado para ti, fantoche.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `188`,
    html: `<p>Cuando te diriges con cautela hasta tu refugio para acostarte antes de que regresen los demás, escuchas unos pasos por el campamento. No quieres que la guardia te descubra, por lo que te ocultas entre la maleza. Las pisadas se acercan y escuchas a dos personas que pasan cerca de tu escondite conversando. Reconoces de inmediato la voz del maestro Turpa.</p>

    <p>—Avisa a los responsables de la guardia que hemos enviado un pequeño destacamento liderado por Deilos para inspeccionar los alrededores y descubrir más pistas sobre la emboscada que nos han tendido. No quiero sorpresas o percances desagradables cuando regresen de la cacería secreta. Espero que hayan dado una severa lección a esos campesinos. Esta chusma tiene que darse cuenta de que no se puede defraudar al imperio de Áinar… Y menos cuando se trata del pago de los impuestos. Con eso no se juega.</p>
  
    <p>—Pero nosotros con sus mujeres sí —responde riendo su acompañante.</p>
  
    <p>Turpa y el oficial se alejan entre carcajadas; tú estás atónito después de lo que acabas de escuchar. El maestro Turpa no solo lo sabe, sino que es el propio instigador de la cacería secreta. Apesadumbrado a la par que colérico por la revelación, sales de tu escondite y te ocultas en tu refugio, intentando conciliar el sueño. Sabes que te va a resultar imposible. Las emociones de esta noche te han desvelado definitivamente; además estás indignado y sientes vergüenza de pertenecer a Uhdanfiún. Al cabo de unos minutos, escuchas pasos que se aproximan y reconoces la voz de Deilos. Cierras los ojos y simulas estar profundamente dormido.</p>
  
    <p>Mientras adviertes como Dahzor ronda a tu alrededor, piensas en la extraordinaria aventura que has vivido esta noche. Seguramente tendrá consecuencias en un futuro próximo.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `189`,
    html: `<p>Te desplomas en el suelo, abrazando a la muchacha, consumido por el esfuerzo de la aceleración. Cuando la sueltas, notas que apenas tienes fuerzas para incorporarte.</p>

    <p>La chiquilla se ha quedado sentada en el suelo y te observa estupefacta, sin entender muy bien todavía lo que ha ocurrido.</p>
  
    <p>—¿Cómo… cómo has hecho eso?</p>
  
    <p>Te apoyas en el tronco de un roble. Respiras profundamente para recuperarte.</p>
  
    <p>Ella no deja de observarte para entender lo sucedido. Se fija en tu cuerpo curtido por el ejercicio, tu vestimenta de combate, la espada del cinto… y se detiene súbitamente en el brazalete de cinco estrías azules que llevas en tu antebrazo.</p>
  
    <p>—¿Qué significado tiene ese brazalete con marcas que llevas en el brazo?</p>
  
    <p>Carraspeas antes de contestar.</p>`,
    actions: [
      {
        id: `27`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `190`,
    html: `<p>Estas mujeres te recuerdan a «Lorean», una preciosa mujer que vivía en tu aldea, y a la que siempre admiraste en secreto…</p>

    <p>Estás fascinado por las hermosas mujeres que te rodean. Avanzas hacia las aguas, acompañado por las tres bellezas, emocionado. Deshaces el cinto de tu espada, que cae envainada al suelo. Sus hábiles manos te ayudan a desprenderte de tus ropajes y notes cómo se te eriza el vello de tu piel.</p>
  
    <p>Te descalzan y tus pies notan el contacto con el agua; el entorno desprende unos perfumes que supones deben pertenecer a tus bellas acompañantes. Te sumerges en el templado líquido con ellas, anticipando un mágico desenlace…</p>
  
    <p>Al rato adviertes que necesitas retomar aire en la superficie. Intentas bracear para volver a subir… pero ellas te están atrayendo hacia el fondo. El pánico te invade y tragas una bocanada de agua que te sabe a fango. Las piernas de las bellas mujeres parecen haberse convertido en largas colas de serpiente. El terror ya se ha apoderado de tus sentidos y tragas otra bocanada de agua que te sabe a fatalidad. Entiendes demasiado tarde que las hermosas mujeres son en realidad unas Niryiin que ahora te arrastran hacia una horrible muerte.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `191`,
    html: `<p>El silbido de tu flecha precede el de la chica y alcanza el muslo de Deilos que cae al suelo, profiriendo un grito agudo. La otra flecha, lanzada por la chiquilla, no encuentra su objetivo y sigue su recorrido, rozando la oreja de Dahzor, que avanzaba por detrás. Asustado por el ataque, da media vuelta y huye gritando:</p>

    <p>—¡Es otra emboscada! ¡Nos estaban esperando, huyamos! Merkar se mueve intentando cubrir a sus compañeros ante un posible ataque, pero Dahzor le estorba en su precipitada huida. La chiquilla está sorprendida por lo ocurrido y te mira de reojo levantando un ceja con reprobación. Le coges rápidamente el cuerno del cinto aprovechando su confusión.</p>
  
    <p>—¡Rápido! ¡Hay que alertar a los campesinos!</p>
  
    <p>Y te pones a soplar el cuerno con todas tus fuerzas.</p>
  
    <p>Se empiezan a oír gritos en la cabaña y en las chozas de los alrededores, mientras observas cómo el grupo huye corriendo a toda velocidad. El corpulento Taifos se ha cargado a Deilos a los hombros, y éste gruñe de dolor cada vez que su compañero da un salto.</p>
  
    <p>—Vamos —le susurras suavemente a tu misteriosa compañera—. ¿No querrás que nos sorprendan aquí, verdad?</p>
  
    <p>Corréis agazapados subiendo por la loma hasta los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: `85`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `192`,
    html: `<p>En ese mismo momento Merkar aúlla de dolor, suelta el arco y se agarra la pierna izquierda. Una flecha está clavada en su muslo. El resto del grupo está saliendo de la cabaña cuando el sonido de un cuerno se propaga por el valle. A la cabeza va Deilos, que sostiene su espada ensangrentada en alto mientras grita:</p>

    <p>—¡Nos han descubierto, larguémonos de aquí!</p>
  
    <p>Se queda atónito al verte.</p>
  
    <p>—¿Nos has traicionado tú?</p>
  
    <p>Taifos aparece a su espalda, y carga contra ti con toda su rabia y fuerza.</p>
  
    <p>—¡Muereeeee!</p>
  
    <p>Estás en una posición muy difícil y tu adversario, además de doblarte en tamaño, también es un Ibtahán de quinto grado como tú. Vas a necesitar algo más que pericia para enfrentarlo…</p>`,
    random: true,
    actions: [
      {
        id: `61`,
        text: `Continuar`,
      },
      {
        id: `127`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `193`,
    html: `<p>Estás furioso y tienes sed de justicia. Aprietas los puños reclamando venganza, alejándote de Tríane que se queda contemplándote desde el borde del camino, con el semblante serio. Su mirada se entristece al verte correr hacia el campamento dominado por la ira y las ansias de revancha.</p>

    <p>Cuando estás llegando al perímetro exterior, te sorprende una voz autoritaria que te interpela:</p>
  
    <p>—¡Alto! ¿Quién va?</p>
  
    <p>Avanzas lentamente para que te reconozca el responsable de la guardia, pero su voz te resulta desagradablemente familiar.</p>
  
    <p>De las sombras surgen dos figuras armadas que te cierran el paso. Son Deilos y Taifos, que empuña una arco cargado.</p>
  
    <p>Tu mano se aferra con determinación a la empuñadura de la espada.</p>
  
    <p>—Detente, imprudente.</p>
  
    <p>Es la voz del Maestro Turpa, que también se ocultaba en las sombras. Avanza lentamente con sus manos a la espalda y te parece vislumbrar otra figura en la penumbra, detrás suyo. Turpa te fulmina con una mirada severa y autoritaria.</p>
  
    <p>—¿Cómo te has atrevido a enfrentarte a tus compañeros de armas? Un guerrero como tú no debería defender a unos campesinos malolientes. Son solo escoria y están para servirnos. Deberías estar orgulloso de ser un guerrero Ainari. Podría esperármelo de un patético Ritión como Zarenyo, pero tú… No me dejas ninguna opción.</p>`,
    actions: [
      {
        id: `19`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `194`,
    html: `<p>Te diriges a la tienda del médico donde se encuentra tu compañero Zarenyo para interesarte por su salud. Te mueves con sigilo para no molestar a los que ya están descansando. Cuando te estás acercando a la carpa, ves salir a dos figuras de su interior. Una de ellas es Larletos, el médico de la expedición, que está hablando con Turpa, el instructor responsable del campamento. Esperas a que hayan terminado para solicitar permiso. No se han dado cuenta de tu presencia y puedes escuchar la conversación que ambos mantienen.</p>

    <p>—… sigue durmiendo; su recuperación será compleja y larga. Esa fractura tiene mal aspecto.</p>
  
    <p>—Sinceramente, me alegro. Espero que de este modo renuncie y abandone la academia. Ese Ritión no es digno de Uhdanfiún y tengo malas experiencias con ese tipo de gentuza.</p>
  
    <p>—Por cierto, hace un momento me ha parecido ver pasar a Deilos con sus amigos…</p>
  
    <p>—No se preocupe, Maese Larletos. Deilos cuenta con mi absoluta confianza.</p>`,
    actions: [
      {
        id: `12`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `195`,
    html: `<p>Mientras reptas por detrás de la tapia para tomar posición, murmuras la secuencia de letras y números con la que entras en Protahitéi, la primera aceleración. En ese instante sientes una tensión que carga tus riñones y un repentino acaloramiento invade todo tu cuerpo. Tienes la percepción de que todo se ha ralentizado a tu alrededor.</p>

    <p>Al incorporarte, te da la sensación de que tu pequeña compañera se mueve pausadamente. Le haces la señal y cargas tu arco. Ella todavía te está mirando. Te incorporas por encima de la tapia y apuntas al que está más cerca de la cabaña. Reconoces al corpulento Taifos, que avanza espada en mano. Sueltas la cuerda. La flecha vuela hacia él. Recargas tu arco y apuntas a Merkar que también empuña el arco tensándolo desde la cintura mientras mira hacia los lados. Sueltas la flecha. Por el rabillo del ojo ves que ella ya tensa su arco y se dispone a disparar. Tu primera flecha se clava en la pantorilla de Taifos que grita al sentir el impacto. Te llevas el cuerno a la boca y soplas con todas tus fuerzas. La segunda flecha roza la nalga de Merkar, arrancándole un gemido de dolor. Se le dispara el arco y su flecha se pierde en el huerto vecino. Cargas una tercera flecha.</p>
  
    <p>Apuntas de nuevo pero constatas que no todo se mueve con lentitud. Alguien corre hacia vosotros a toda velocidad. Es Deilos.</p>`,
    actions: [
      {
        id: `71`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `196`,
    html: `<p>Te agachas lentamente vigilando lo que hace el grupo en todo momento.</p>

    <p>Escuchas el leve roce de una flecha frotando la cuerda del arco. Agachas la mirada y ves a la muchacha preparándose para disparar. La sujetas por el brazo, para frenar sus intenciones.</p>
  
    <p>—¿Cuál es tu plan? —le preguntas.</p>
  
    <p>—No pienso esperar a que entren en esa cabaña y asesinen a una familia entera. Voy a cargarme al cabecilla de esos asesinos y luego daré la alarma con el cuerno. ¿Tienes alguna idea mejor?</p>
  
    <p>—Vale —le concedes—. Esmérate en afinar la puntería y pásame el cuerno, yo daré la alarma con más fuerza. Espera que me sitúe un poco más lejos para que podamos pillarles con un fuego cruzado. Te hago una señal.</p>
  
    <p>—Está bien pero date prisa…</p>
  
    <p>La chiquilla te entrega el cuerno refunfuñando y se prepara para disparar. Empiezas a reptar para colocarte a unos metros de ella pensando cuál sería la mejor estrategia para que esta situación no se complique demasiado…</p>`,
    actions: [
      {
        id: `10`,
        text: `piensas tomar la iniciativa y disparar tú primero`,
      },
      {
        id: `31`,
        text: `quieres entrar en Protahitéi (Primera aceleración)`,
      },
    ],
  },
  {
    id: `197`,
    html: `<p>Irritado, le contestas con el mismo bisbiseo.</p>

    <p>—No digas estupideces, niña. Eso es imposible. Regresa por donde has venido. Eres demasiado pequeña para rondar por la noche con estas pintas.</p>
  
    <p>—Y tú eres un bravucón ingenuo. Te arrepentirás de esto.</p>
  
    <p>—He dicho que te largues, antes de que te descubran, o serás tú la que te arrepientas.</p>
  
    <p>Su rostro se ha desencajado y ahora expresa auténtico pavor. Se aparta de ti, asustada. Aprovechas la circunstancia para retomar la marcha dejándola atrás, convencido de que saldrá huyendo de inmediato. Le das la espalda y vigilas los movimientos del grupo.</p>
  
    <p>Las palabras de la niña te han inquietado, pero no te puedes creer las bobadas que ha insinuado. Seguro que se trata de supersticiones de campesinos asustadizos.</p>
  
    <p>«Pfff… —piensas para tus adentros—. Tonterías. Al final van a robar unas gallinas o un cerdo a unos aldeanos. Menuda sandez lo de la cacería secreta».</p>
  
    <p>Sigues acercándote al objetivo del grupo, desde la ladera opuesta.</p>
  
    <p>Te giras un instante para ver si la niña se ha marchado ya… y ya no la ves por ningún lado. Mucho mejor.</p>`,
    actions: [
      {
        id: `215`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `198`,
    html: `<p>Estás enumerando la secuencia en tu interior cuando notas de pronto que se ha hecho el silencio. Te asomas. Te acercas con cuidado hasta el lugar desde el cual os han atacado. Todavía hay piedras de tamaño considerable en el suelo, a modo de munición. Examinas las pisadas. Eran pocos; tres o cuatro como mucho. Todo esto te resulta muy extraño.</p>

    <p>Al regresar al campamento escuchas gritos, son los instructores que dan instrucciones con las armas en alto, berreando para averiguar si algún alumno ha sido herido. Escuchas que Zarenyo es la única víctima de esta insólita emboscada. La mala suerte se ha cebado con él y le han alcanzado dos veces, partiendo el húmero del brazo izquierdo y golpeándole fuertemente en la cabeza. Te comentan que está inconsciente y que Turpa ha mandado que se lo lleven a la tienda del médico, maese Larletos, para que examine la gravedad de sus heridas. Mañana a primera hora lo trasladarán a Koras.</p>
  
    <p>Turpa reúne al resto de los alumnos para informarles que los asaltantes han sido unos campesinos rebeldes de los alrededores. Han conseguido huir sin ser identificados. Turpa está convencido que son unos insurgentes que desconfían y envidian a los guerreros de Uhdanfiún y la gloria del imperio Ainar.</p>
  
    <p>A pesar del tono convencido del maestro Turpa, tú albergas serias dudas al respecto ya que lo que has visto hace un momento no parece cuadrar demasiado con esa versión de los hechos. Te cuesta creer que cuatro campesinos disparen con tanta precisión y puedan escapar después de semejante emboscada.</p>
  
    <p>En el momento que te disponías a visitar a Zarenyo para interesarte por su salud, Turpa anuncia que se tomarán medidas de seguridad para evitar más ataques. Se establecerán guardias para vigilar el interior del campamento y las zonas de los alrededores. Se establece el orden y nombre de los distintos centinelas… y te escogen para la primera guardia en el perímetro exterior.</p>
  
    <p>Apenas tienes tiempo para comer algo, equiparte y visitar a Zarenyo antes de que empieces tu ronda.</p>
  
    <p>Desgraciadamente, te comentan que tu amigo sigue inconsciente por el momento.</p>`,
    actions: [
      {
        id: `132`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `199`,
    html: `<p>Mientras esquivas la lluvia de proyectiles que os están arrojando, intentas vislumbrar de dónde proviene la emboscada y quiénes son vuestros enemigos. Sospechas que podría tratarse de una cuadrilla de ladrones imprudentes, aunque lo más probable es que sean alguna banda de bárbaros rebeldes. Ves a tu izquierda como Deilos y dos de sus compañeros saltan por un desnivel para ocultarse tras una zanja natural que ofrece el terreno; a tu derecha Zarenyo intenta moverse para parapetarse detrás de un gran fresno… ¡Y en ese mismo momento ves como le impacta en el brazo una piedra del tamaño de un melón lanzada a gran velocidad, derribándole en el acto! Tu compañero aúlla de dolor mientras se sujeta el brazo maltrecho; te abalanzas a su espalda para estirarle por los hombros y ponerlo a buen recaudo mientras él sigue retorciéndose y gritando. Justo a tiempo, ya que otro pedrusco golpea con violencia en el mismo lugar donde se encontraba Zarenyo un segundo antes.</p>

    <p>Te incorporas y desenvainas tu espada, preparado para el inminente ataque, con la espalda apoyada sobre el ancho tronco de un viejo fresno, con las piernas flexionadas para poder asestar un tajo rápido y certero, al tiempo que cubres a tu compañero herido. Armas el brazo dispuesto a entrar en combate.</p>
  
    <p>Pasan unos segundos… y misteriosamente, ha cesado el ataque.</p>`,
    actions: [
      {
        id: `60`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `200`,
    html: `<p>—Estás diciendo bobadas, criatura. Conozco a estos guerreros y no son los bárbaros que insinúas.</p>

    <p>A pesar de querer ser categórico, te ha dado la sensación que tu tono de voz era algo vacilante. Te levantas sujetando a la chiquilla por el brazo, mientras ella te mira con auténtico terror y te patea para intentar liberarse de tu agarre. El grupo, que avanzaba agazapado, se incorpora también.</p>
  
    <p>Te dispones a relatarles las difamaciones que te ha contado, pero Deilos se anticipa y mira con mucho interés a la chiquilla.</p>
  
    <p>—Vaya, vaya. Si resulta que has cazado la mejor pieza…</p>
  
    <p>Las palabras de Deilos te han sonado de lo más obsceno; estás turbado y ya no sabes lo que ibas a decir…</p>
  
    <p>De pronto notas un dolor muy agudo en tu antebrazo, la muchacha te acaba de morder con todas sus fuerzas y has notado cómo sus dientes atravesaban tu carne, haciéndote soltar su brazo de inmediato. Ella aprovecha la ocasión para salir corriendo, ladera arriba, hacia el bosque.</p>
  
    <p>Taifos se ríe comentando «¡Vaya fierecilla!» y Deilos se avanza para ir a por ella, pero tú le detienes de inmediato.</p>
  
    <p>—Déjala que se vaya, es una niña asustada.</p>
  
    <p>—Pero ¿qué tonterías dices? ¡Vamos a divertirnos un rato con ella!</p>
  
    <p>Ella sigue corriendo ladera arriba, pero sabes que la podéis atrapar en cuatro zancadas. Deilos y los demás han reanudado la persecución y estás tan confuso que te sumas a la carrera sin saber muy bien lo que va a pasar a continuación. Confuso y nervioso, corres hacia ella tan rápido que consigues una ventaja de varios cuerpos sobre el resto del grupo.</p>
  
    <p>La chiquilla está todavía a cincuenta metros de los lindes del bosque y ya casi la has alcanzado.</p>
  
    <p>Los demás te jalean por detrás mientras corren.</p>
  
    <p>—¡Vamos! ¡Atrapa a esa zorra! —farfulla Deilos con la voz entrecortada por el jadeo.</p>`,
    actions: [
      {
        id: `217`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `201`,
    html: `<p>Al finalizar la memorización de la secuencia de aceleración, notas cómo los músculos lumbares se endurecen y un calor se expande velozmente por todo tu cuerpo.</p>

    <p>Saltas ágilmente la tapia y corres detrás de la chiquilla que parece ralentizada. Atrás tienes a Taifos, que todavía no ha alcanzado el murete pero se aproxima a la misma velocidad que tú.</p>
  
    <p>Las distancias se acortan muy rápidamente y puedes calcular que cien metros antes de llegar al bosque la habrás atrapado. Durante el escaso tiempo que tardas en darle alcance a la muchacha, te preocupas por su suerte. Deilos parece estar rabioso y te preguntas qué crueles intenciones puede tener. Además, no estás muy seguro de lo que hubiese ocurrido en esa cabaña de no haber intervenido la muchacha, pero la actitud de Taifos en el momento de entrar en la choza no presagiaba nada bueno…</p>
  
    <p>Ya estás a escasos de metros de ella y te asalta la duda; quizá lo mejor sería ayudarla a escapar.</p>`,
    actions: [
      {
        id: `216`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `202`,
    html: `<p>—¿Qué estás haciendo? —Le susurras con tono paternalista.</p>

    <p>—¿Y tú? —contesta sin alzar la voz y mirando de manera ostensible como la tienes aprisionada.</p>
  
    <p>Te ha sorprendido su voz. Te ha parecido más ronca de lo que te hubieses imaginado con ese aspecto de niña. De pronto caes en la cuenta y entiendes su observación. Te ruborizas avergonzado y te retiras lentamente sin levantarte, para no ser descubierto, a la vez que le indicas con la mano que permanezca tumbada y compruebas que el grupo sigue avanzando sin haberse percatado de vuestra presencia.</p>
  
    <p>Ella adivina lo que estás mirando. Mantiene su mirada desconfiada mientras cuchichea:</p>
  
    <p>—¿Tú también te has fijado en ese grupo de guerreros que se está colando entre los huertos de esa aldea?</p>
  
    <p>Asientes con una inclinación de cabeza sin dejar de mirarla.</p>
  
    <p>—Tenemos que detenerlos antes de que hagan una matanza.</p>
  
    <p>No puedes creer lo que acaba de decir.</p>
  
    <p>—¿Qué quieres decir?</p>
  
    <p>—Quiero decir que esa gentuza son guerreros de Uhdanfiún; van a mutilar y asesinar a sangre fría una familia de campesinos sin motivo… y probablemente hagan cosas más horribles todavía.</p>
  
    <p>Al acabar la frase se le ha quebrado la voz; sus ojos brillan súbitamente como si estuviera a punto de llorar. Te has quedado perplejo y sin habla.</p>
  
    <p>—Ahora ya lo sabes. ¿Me ayudas a impedirlo o te desentiendes y te conviertes en su cómplice?</p>`,
    actions: [
      {
        id: `83`,
        text: `piensas que está mintiendo y no vas a hacerle caso`,
      },
      {
        id: `108`,
        text: `la crees y piensas ayudarla`,
      },
    ],
  },
  {
    id: `203`,
    html: `<p>La flecha araña la nalga de Deilos, arrancándole trozos de tela y carne que le hacen aullar de dolor, para clavarse luego delante de Dahzor, que grita asustado:</p>

    <p>—¡Una embos…</p>
  
    <p>Te desplazas a lo largo de la tapia para lanzar una segunda flecha que pasa silbando junto a Taifos y llega a los pies de Merkar, sin que consiga identificar de dónde proviene el tiro.</p>
  
    <p>—… cadaaaa!</p>
  
    <p>Dahzor ya se está girando y huyendo a toda prisa por donde han venido, molestando el ángulo de visión del único arquero del grupo.</p>
  
    <p>Cargas una tercera flecha mientras vuelves sobre tus pasos, disparando en parábola, para que otra flecha caiga ante el grupo en plena retirada.</p>
  
    <p>Deilos está gritando instrucciones al grupo, que se retira desordenadamente.</p>
  
    <p>En la cabaña y otras chozas de los alrededores se empiezan a oír gritos de alarma.</p>
  
    <p>Apuras tu trance guardando de nuevo el arco a la espalda y aferrando a la chiquilla por la cintura, cargando con ella mientras asciendes corriendo por la ladera, hasta la oscuridad que brindan los lindes del bosque de Corocín.</p>`,
    actions: [
      {
        id: `189`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `204`,
    html: `<p>Turpa convoca al resto de alumnos e informa que el ataque ha sido perpetrado por unos campesinos de los alrededores a los que han visto huir, pero no han podido identificar. Seguramente se trata de unos sediciosos que recelan de los guerreros de Uhdanfiún y de la gloria del imperio Ainar.</p>

    <p>El tono firme y autoritario del Maestro Turpa no deja lugar a dudas. Escuchas en silencio, como el resto de alumnos. Sin embargo te cuesta creer que semejante emboscada haya sido perpetrada por unos simples campesinos que han conseguido escapar.</p>
  
    <p>Turpa interrumpe tu reflexión cuando anuncia que se harán guardias en el perímetro interior y exterior para reforzar la seguridad del campamento, asignándote la primera de ellas en la zona exterior.</p>
  
    <p>Cenas algo rápidamente y te equipas como es debido para asumir tus obligaciones.</p>`,
    actions: [
      {
        id: `132`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `205`,
    html: `<p>A pesar de su aspecto tan desaliñado, te parece adivinar que bajo toda esa mugre se esconde una linda muchacha. Te fulmina con una fría mirada; sus ojos azules acerados son desafiantes.</p>

    <p>—¿Qué pretendes? —le susurras con tono conminatorio.</p>
  
    <p>—¿Y tú, quién eres?</p>
  
    <p>De pronto, te sientes ridículo y avergonzado al tenerla aprisionada entre tus piernas. Te apartas lentamente sin incorporarte para no ser descubierto y le haces un gesto para reclamarle la máxima discreción…</p>
  
    <p>Te sorprende comprobar que se también se mueve con mucho sigilo, oteando de inmediato hacia el grupo que se mueve a lo lejos, como si le obsesionara mucho más su presencia que tu inesperado ataque. Sin dejar de mirarte con desconfianza, cuchichea:</p>
  
    <p>—Entonces…, ¿tú también has visto a ese grupo que se está infiltrando en la aldea al otro lado del valle?</p>
  
    <p>Su voz es algo ronca y no corresponde con su aspecto de chica. Asientes con la cabeza sin dejar de mirarla.</p>
  
    <p>—Tenemos que detenerlos antes de que hagan una masacre.</p>
  
    <p>Te quedas perplejo. Formulas tu siguiente pregunta marcando cada una de tus palabras.</p>
  
    <p>—¿Cómo has dicho?</p>
  
    <p>—Esa banda de indeseables son guerreros de Uhdanfiún. Se disponen a asaltar una casa aislada para asesinar a una pobre familia… y probablemente hacer cosas peores.</p>
  
    <p>Te ha parecido que el tono al final de su frase era angustiado. No puedes articular una palabra.</p>
  
    <p>—Ahora que lo sabes… ¿Me vas a ayudar a detenerlos o te vas a desentender y convertirte en su cómplice?</p>`,
    actions: [
      {
        id: `197`,
        text: `piensas que está mintiendo y no vas a hacerle caso`,
      },
      {
        id: `114`,
        text: `la crees y piensas ayudarla`,
      },
    ],
  },
  {
    id: `206`,
    html: `<p>Cuando Taifos se disponía a entrar en la casa, escuchas un leve silbido y notas que algo te pasa rozando por el lado, pero lo que te sobresalta es el grito de Taifos justo después, trastabillando hacia atrás con una flecha clavada en su hombro.</p>

    <p>Deilos, se ha quedado perplejo y mira con rabia en tu dirección, agachas rápidamente la cabeza y te giras intuyendo lo peor. Efectivamente, a unos ocho metros detrás de ti ves a la niña tensando nuevamente su arco con una fiera determinación en sus ojos.</p>
  
    <p>Escuchas la advertencia de Deilos, que grita:</p>
  
    <p>—¡Allí! ¡A por él!</p>
  
    <p>Te asomas de nuevo sin que te vean para hacerte una composición de la situación.</p>
  
    <p>Mucho peor de lo que imaginabas. Mientras Taifos se retira sujetándose el hombro herido, Merkar avanza lentamente y Dahzor corre detrás de Deilos, que a su vez se mueve con una rapidez inusual, por lo que deduces que ha entrado en Protahitéi.</p>
  
    <p>La segunda flecha de la chiquilla pasa sobre tu cabeza pero contemplas como Deilos la esquiva fácilmente y se abalanza hacia delante para perseguirla. En tres segundos saltará la tapia, y cinco segundos más tarde la capturará.</p>
  
    <p>«Maldición», murmuras.</p>
  
    <p>Empiezas a recitar la secuencia del Protahitéi para entrar también en aceleración.</p>`,
    actions: [
      {
        id: `211`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `207`,
    html: `<p>Compruebas desde vuestro escondite que Taifos, Merkar y Bhratar están de guardia. Seguro que te están esperando con instrucciones muy precisas. Tríane te coge de la mano mientras te habla, y te dejas llevar a las afueras del campamento, donde la viste por primera vez.</p>

    <p>—No te queda otra alternativa que convertirte en fugitivo. Pero no temas, se avecinan tiempos revueltos y tienes por delante muchas aventuras y hazañas que te pueden brindar gloria y poder. Y si quieres seguir conociendo los secretos del Tahedo, ten paciencia y busca a un guerrero llamado Kratos May.</p>
  
    <p>Notas cómo sus dedos se sueltan de tu mano; te rozan y se deslizan, resbalando por tus falanges. Quieres mirarla a los ojos una vez más… pero ya no está.</p>
  
    <p>Miras a tu alrededor, pero te has quedado solo. Decides que vas a ocultarte un tiempo en Ritión. Zarenyo te contó que había lugares fantásticos allí y quizá os encontréis de nuevo y pueda brindarte hospedaje. Tú a cambio le podrás relatar una aventura de lo más interesante.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `208`,
    html: `<p>Los ojos de Deilos empequeñecen en un segundo, reflejando un intenso odio. Detrás de él, escuchas murmurar a Merkar refunfuñar: «Ya estamos otra vez».</p>

    <p>Inspiras lentamente sin dejar de mirar a todos los componentes del grupo. Únicamente Dahzor parece algo confuso. Mentalmente, recitas la serie de letras y números que te permitirán entrar en Protahitéi, la primera aceleración.</p>
  
    <p>Deilos también hace el ademán de empuñar la espada; en ese momento resuena a tu espalda el potente sonido de un cuerno que retumba en toda la aldea debido al eco.</p>
  
    <p>Tu cuerpo reacciona rápidamente: tu temperatura aumenta de inmediato mientras los riñones se te ponen rígidos… y todo parece haberse ralentizado a tu alrededor.</p>
  
    <p>La chiquilla corre ladera arriba intentando huir hacia el bosque.</p>
  
    <p>Contemplas el movimiento de la hoja de la espada de Deilos cuando sale de la vaina, como si sucediera al ralentí. Ejecutas un Yagartéi intimidatorio que lo obliga a dar un paso atrás que lo desequilibra lo justo para que puedas atizarle una patada frontal en todo el pecho que lo levanta del suelo y lo envía sobre Taifos, al que también derriba el impacto de su compañero.</p>
  
    <p>Afrontas al resto de grupo, que parecen torpes y adormilados, a causa de tu aceleración. Propinas un codazo en toda la cara a Bhratar que gruñe y cae al suelo mientras se sujeta la nariz que le acabas de romper. Desarmas a Dhazor y lo empujas contra Tauldos. Merkar se había quedado atrás y se dispone a tensar su arco cargado desde la cintura. Está apuntando a la muchacha.</p>`,
    actions: [
      {
        id: `11`,
        text: `decides cubrir a la chica`,
      },
      {
        id: `80`,
        text: `intentas detener a Merkar`,
      },
    ],
  },
  {
    id: `210`,
    html: `<p>Sigues tan sorprendido que permaneces encima de ella, sin moverte.</p>

    <p>—Me estás aplastando.</p>
  
    <p>La voz de la zagala es algo ronca para el aspecto que tiene, lo cual te desconcierta todavía más. Su mirada también es desafiante, pero sus ojos azules como el acero te resultan atractivos. De hecho, te asombra reconocer que bajo esa apariencia mugrienta parece que se oculta una preciosa muchacha.</p>
  
    <p>Te propina un rodillazo en los riñones que te sacan de tu embeleso; te avergüenzas de estar encima de ella y te apartas a un lado con cuidado intentando no descubrid tu posición a Deilos y los suyos. Ella se percata de tu conducta y tampoco se mueve. Parece que está mucho más pendiente y recelosa del grupo que por tu reciente ataque.</p>
  
    <p>—Te has fijado en ellos también, ¿verdad? ¿Sabes quiénes son y lo que se proponen?</p>
  
    <p>No contestas. Sientes todavía mucha curiosidad por esta chiquilla tan peculiar.</p>
  
    <p>—Son guerreros de Uhdanfiún. Unos miserables que se van a divertir asaltando una cabaña y matando de manera salvaje a la pobre familia que se encontrarán dentro… o haciendo algo peor.</p>
  
    <p>Al terminar la frase, su tono ha sido vacilante y parece que unas lágrimas estaban a punto de brotar de sus ojos, pero se recompone y se gira para observar al grupo, recolocándose el arco corto y la aljaba a la espalda.</p>
  
    <p>—¿Qué pretendes hacer? —le preguntas con un susurro.</p>
  
    <p>—Impedirlo. ¿Me vas a ayudar a detenerlos o te vas a desentender y convertirte en su cómplice?</p>
  
    <p>Levantas la vista; el grupo de Deilos ya os ha localizado. Está avanzando con sigilo hacia vuestra posición.</p>`,
    actions: [
      {
        id: `200`,
        text: `crees que miente y no piensas ayudarla`,
      },
      {
        id: `138`,
        text: `piensas que dice la verdad`,
      },
    ],
  },
  {
    id: `211`,
    html: `<p class="asangre">Mientras terminas de subvocalizar la secuencia, escuchas el sonido de un cuerno de caza.</p>

    <p>Tienes que admitirlo: la chiquilla tiene redaños.</p>
  
    <p>Ya notas ese fuego que se propaga en tu interior. Tus lumbares se contraen con fuerza. Ahora todo transcurre más lentamente… salvo Deilos.</p>
  
    <p>De un rápido vistazo compruebas cómo la muchacha se ha dado la vuelta y huye ladera arriba, asombrada por la aceleración de Deilos. Tú sabes que no lo logrará sin tu ayuda y te preparas para intervenir. Asomas la cabeza con cuidado por la tapia viendo como Deilos se acerca. Tres… dos… uno… ¡Ahora!</p>
  
    <p>Justo en el mismo momento que Deilos salta por encima de la valla, tu cuerpo se ha lanzado hacia él como un resorte impulsado por tus piernas flexionadas. Le haces un violentísimo placaje en el aire y ambos rodáis por los suelos.</p>
  
    <p>Deilos todavía está en el suelo cuando tú te incorporas para salir corriendo detrás de ella para cubrir su huida.</p>
  
    <p>Deilos ha quedado totalmente conmocionado al verte.</p>
  
    <p>—¡Tú!… ¿?</p>
  
    <p>La chiquilla ha obtenido algo más de ventaja y ya está acercándose a los lindes del bosque, pero sabes de lo que es capaz Deilos, por lo que corres detrás de ella, aprovechando tu aceleración.</p>
  
    <p>Ya se oyen gritos de alarma que provienen de las chozas de los alrededores y esperas que eso le haga desistir, aunque no estás muy convencido.</p>
  
    <p>Ya casi le has dado alcance a la chica; estáis a escasos metros del bosque… pero escuchas unos extraños gruñidos y un intenso trotar que proviene de la espesura.</p>
  
    <p>De repente, cuatro enormes lobos aparecen saltando a través de la arboleda y el más grande de ellos, que tiene una cresta blanca que se dibuja sobre su pelaje color gris plomizo, cae pesadamente sobre ti, aplastándote con sus enormes pezuñas contra el suelo. Profiere un gruñido lento y sordo mientras te mira fijamente.</p>
  
    <p>La muchacha… levantas instintivamente la cabeza para verla. Está sana y salvo, junto a los árboles, impresionada por la súbita aparición de los cánidos… que no le hacen ni caso.</p>
  
    <p>Y en ese momento, también la ves a ella: Tríane, oculta detrás de un ancho fresno, acechándote con una expresión fría y cruel. Ahora lo comprendes: esos lobos son sus emisarios y tú no has superado la prueba que te ha planteado.</p>
  
    <p>Las fauces del lobo gris se abaten sobre tu cuello sin piedad, desgarrándote la yugular de cuajo.</p>
  
    <p>Mueres instantáneamente sin poder arrepentirte de tus errores.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `212`,
    html: `<p>Estás furioso. En primer lugar por haberte dejado atrapar por semejante mequetrefe y en segundo lugar por escuchar tales difamaciones. Intentas controlar tu ira, pero te cuesta contenerte y ya le habrías saltado encima si no te estuviera apuntando.</p>

    <p>—Te equivocas totalmente. Es cierto que son guerreros de Uhdanfiún pero no puedo creer tus palabras. Conozco a esos seis individuos que están moviendo ahí abajo y…</p>
  
    <p>La voz que se oculta en las tinieblas te interrumpe de repente.</p>
  
    <p>—Es cierto, eres uno de ellos. Ese brazalete que llevas con las marcas azules…</p>
  
    <p>—Escúchame, contestas. No saaaaab…</p>
  
    <p>Ya no puedes hablar. Solo emites un desagradable gorjeo y notas como un líquido caliente y viscoso se derrama por tu cuello. No has tenido tiempo de reaccionar; ha soltado la cuerda de su arco y la flecha te ha atravesado el cuello por ambas partes. Sigues emitiendo ese ruido desagradable unos segundos más, el tiempo que dura tu agonía.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `213`,
    html: `<p>Leve oscilación de cabeza. Ninguna resistencia.</p>

    <p>—Te voy dar la vuelta lentamente y te voy a dejar respirar, pero si haces cualquier otro sonido date por muerto. ¿De acuerdo?</p>
  
    <p>Otra bravuconería. Nueva oscilación de cabeza.</p>
  
    <p>Retiras tu abrazo para darle la vuelta sin dejar de aprisionarlo entre tus piernas. Lo giras lentamente para verle la cara… ¡Es una chiquilla!</p>
  
    <p>Estás alucinando y no articulas una palabra. Afortunadamente, ella tampoco. Te fijas en su aspecto. Bajo la capucha y la capa, te da la sensación de que hay una chiquilla de apenas catorce años vestida con ropa sucia que no es de su talla. Harapos y pieles para protegerse del frío y unas calzas que le vienen grandes y que se sujetan a la cintura gracias a una cuerda de esparto, a modo de cinturón. No lleva más armas que el arco corto y la aljaba con flechas que asoman por la espalda, con un cuerno de caza que cuelga, sujeto a la cuerda. Te mantienes agachado para que no te pueda ver nadie y contemplas su rostro. Casi la podrías tocar con la nariz pero su aspecto mugriento te da un poco de grima. Tiene el cabello largo, pero está tan sucio que no sabrías decir de qué color es. Bajo la suciedad de su cara quizá podría ocultarse un bonito un rostro; tiene unos grandes ojos azules oscuros, como el acero… que te miran con desafío.</p>`,
    actions: [
      {
        id: `202`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `214`,
    html: `<p>Retomas tu vigilancia del grupo. Constatando que se acaban de detener en un sendero que asciende hacia una cabaña situada sobre una loma, algo más aislada del resto. Te acercas al otro extremo de la casa, deteniéndote en la tapia que delimita los terrenos de la choza con la ladera que lleva al bosque.</p>

    <p>Desde esa privilegiada posición, adviertes cómo Deilos ha reunido al grupo y empieza a dar instrucciones.</p>
  
    <p>El fornido Taifos toma la cabeza, seguido de cerca por Deilos. Algo más atrás les sigue Dahzor.</p>
  
    <p>Tauldos y Brathar se quedan más abajo vigilando el cruce de senderos por el que han venido.</p>
  
    <p>Merkar se ha colocado a medio camino entre los dos equipos, con el arco cargado y tensado a la altura de la cintura.</p>
  
    <p>En ese momento percibes cómo Taifos desenvaina lentamente su espada dirigiéndose al interior de la cabaña.</p>
  
    <p>Turbado y azorado, entiendes demasiado tarde que no se disponen a robar unas gallinas…</p>`,
    actions: [
      {
        id: `206`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `215`,
    html: `<p>Cuando te vuelves para vigilar al grupo, te das cuenta que se ha detenido frente a un sendero que serpentea hasta tu posición, dejando a un lado una choza situada sobre un altozano y algo más aislada que las demás. La casucha tiene tierras y una tapia en la parte de atrás, que delimita su propiedad con la ladera que asciende hacia el bosque. Por delante tiene un huerto y un cercado con una pequeña entrada cercana a la ubicación del grupo. Te deslizas hasta la tapia y te colocas detrás, para controlar los movimientos del grupo.</p>

    <p>Deilos levanta el brazo para congregar al equipo; puedes distinguir la tremenda envergadura de Taifos cuando se sitúa a su lado. Al rato compruebas que se produce un pequeño sobresalto en el seno de la banda; te están buscando. Bhratar, que iba el último, desanda el camino recorrido en tu busca. Te divierte la confusión que estás provocando. Deilos, intranquilo, empieza a escudriñar los alrededores, al igual que sus compañeros. Cuando su impaciente exploración examina la tapia tras la cual te estás ocultando, decides emerger y hacerles una señal para que te puedan avistar.</p>
  
    <p>Deilos es el primero que te descubre y te parece adivinar una expresión asombrada en su rostro. Tras un momento de estupor, parece reaccionar y empieza a dar instrucciones al grupo.</p>
  
    <p>Tauldos y Brathar se quedan en el cruce del sendero, posicionándose como centinelas. Taifos avanza hacia la cabaña, seguido de cerca por Deilos. Justo detrás está Dahzor, que avanza con desconfianza. Merkar cierra la marcha varios pasos atrás, con el arco cargado y tensado a la altura de la cintura. A medida que se acerca a la choza, Deilos te hace señas para que saltes la tapia y te reúnas con ellos.</p>
  
    <p>Nervioso e intranquilo, franqueas la pequeña valla y te acercas al grupo.</p>
  
    <p>Taifos está muy cerca de la entrada de la choza; te mira poniendo un dedo sobre sus labios y desenvaina lentamente su espada…</p>`,
    actions: [
      {
        id: `38`,
        text: `Continuar`,
      },
    ],
  },
  {
    id: `216`,
    html: `<p>En ese mismo instante escuchas unos gruñidos que parecen provenir del bosque, acercándose velozmente. De improviso, cuatro enormes criaturas surgen de la arboleda y dan un tremendo salto por encima de la chiquilla. Te has quedado paralizado por la sorpresa viendo la figura de cuatro lobos enormes que se recortan en el cielo.</p>

    <p>El más grande de todos cae sobre ti, aplastándote con sus enormes pezuñas contra el suelo. Es de color gris plomizo, con una cresta blanca que le recorre todo el lomo. Te muestra sus terribles fauces mientras te tiene inmovilizado en el suelo. Por detrás escuchas cómo Taifos reniega y retrocede.</p>
  
    <p>Levantas la cabeza para saber si la muchacha está a salvo. Puedes verla, acurrucada detrás de los lobos tapándose los oídos y con una expresión de pánico en su rostro, pero ningún lobo parece amenazarla. Y en ese momento, también la descubres a ella: es Tríane, que te observa desde el linde del bosque, oculta bajo un ancho fresno. Su mirada es dura y despiadada, para que comprendas que el castigo que te espera es obra suya.</p>
  
    <p>Aún la sigues mirando cuando el gran lobo gris te desgarra el cuello de un mordisco, arrancándote un trozo de yugular de cuajo. Agonizas rápidamente sin poder entender lo que está pasando.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `217`,
    html: `<p>Agotada por el esfuerzo, tropieza y cae entre las malezas.</p>

    <p>Estás confuso y te plantas ante ella sin saber muy bien qué hacer.</p>
  
    <p>En ese mismo instante, surgen de la oscura arboleda cuatro figuras enormes que saltan hacia delante. Son lobos salvajes. El que se te viene encima tiene un tamaño descomunal. Es de color gris plomizo y tiene una cresta blanca sobre el lomo. Intentas esquivarlo pero su enorme pezuña te tumba contra el suelo. Los otros tres lobos encaran al resto del grupo, que retrocede temeroso.</p>
  
    <p>Escuchas cómo Deilos grita:</p>
  
    <p>—¡Huyamos de aquí! ¡Son bestias de Corocín!</p>
  
    <p>Intentas incorporarte para ver si la chica está sana y salva. Puedes verla, acurrucada a un lado, sin que las bestias le hagan caso. Ha cogido su cuerno y se dispone a soplar en él con todas sus fuerzas… Detrás de ella puedes ver los árboles y una extraña figura que reconoces de inmediato: Es Tríane, que te está observando. Su mirada de reproche y odio no deja lugar a dudas. La has decepcionado.</p>
  
    <p>El gran lobo abre sus enormes fauces y se acerca a tu rostro. Su ataque es tan veloz, que ni siquiera puedes reaccionar. Notas cómo sus colmillos desgarran tu cuello y un líquido viscoso y caliente se escapa de tus venas. Un momento de intenso calor te invade cuando tu sangre fluye, liberada por la carótida seccionada. Justo después, un frío intenso.</p>
  
    <p>Y ahora, nada.</p>
  
    <p class="cursiva">FIN</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `DramatisPersonae`,
    html: `<h1>Dramatis Personae</h1>

    <table>
      <tbody>
        <tr>
          <td>
            <b>Bhratar</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún seguidor de Deilos. Ainari.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Dahzor</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún oriundo de la república de la Horda Roja. Compañero de campamento del héroe de este libro aventura.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Deilos</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún. Ainari de buena familia y antiguo compañero de Derguín y Mikhon Tiq en Uhdanfiún, antes de que éstos fueran expulsados.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Derguín</b>
          </td>
  
          <td></td>
  
          <td>
            Antiguo estudiante de Uhdanfiún, que parece conocer la chiquilla, vinculado a otra cacería secreta.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Larletos</b>
          </td>
  
          <td></td>
  
          <td>
            Médico del campamento. Ainari.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Linar</b>
          </td>
  
          <td></td>
  
          <td>
            Kalagorinor que vive apartado del mundo en el bosque de Corocín.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Merkar</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún seguidor de Deilos. Ainari.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Taifos</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún seguidor de Deilos. Ainari.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Tauldos</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún seguidor de Deilos. Ainari.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Tríane</b>
          </td>
  
          <td></td>
  
          <td>
            Un misterio.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Turpa</b>
          </td>
  
          <td></td>
  
          <td>
            Maestro e instructor de Uhdanfiún, miembro del Tribunal de la Espada. Fue instructor de Derguín antes de que lo expulsaran.
          </td>
        </tr>
  
        <tr>
          <td>
            <b>Zarenyo</b>
          </td>
  
          <td></td>
  
          <td>
            Alumno de Uhdanfiún y compañero de campamento del héroe de este libro aventura.
          </td>
        </tr>
      </tbody>
    </table>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
  {
    id: `Glosario`,
    html: `<h1>Glosario</h1>

    <p class="term">Aceleración (Tahitéi)</p>

    <p>
      Práctica ancestral de los maestros del Tahedo, que aumenta durante un
      lapso de tiempo la velocidad y agilidad de sus movimientos, y en cierta
      medida también su fuerza. Consiste en una fórmula secreta, compuesta por
      una serie de letras y números, que al ser subvocalizada provoca una
      reacción corporal instantánea. La contrapartida es que las aceleraciones
      consumen rápidamente las energías del cuerpo, de modo que tras ellas hay
      que reponer fuerzas ingiriendo comida y bebida en gran cantidad y con un
      descanso adecuado.
    </p>

    <p>
      Existen dos aceleraciones conocidas. La primera es Protahitéi, que se
      enseña a partir del quinto grado, y mejora el rendimiento físico en un
      cincuenta por ciento. Mirtahitéi, la segunda aceleración, duplica la
      velocidad de un organismo normal. Un maestro en Mirtahitéi puede cruzar un
      río de diez metros de un salto. Requiere una recuperación más larga, y por
      ello no suele recurrirse a ella salvo en caso de necesidad, y raras veces
      durante más de cinco minutos.
    </p>

    <p>
      Se dice que existe una tercera aceleración, y que ésta solo la conocen el
      Maestre de Uhdanfiún y algún otro Tahedorán privilegiado, como el gran
      Kratos May.
    </p>

    <p class="term">Áinar</p>

    <p>
      País situado al noroeste de Tramórea. En tiempos pasados fue un imperio
      que dominó casi todas las regiones civilizadas del continente. En la época
      en que transcurre la novela, su monarca sigue denominándose emperador, y
      los soberanos de otros reinos le deben pleitesía, aunque esta autoridad es
      puramente nominal. La capital de Áinar es Koras.
    </p>

    <p class="term">Ainari</p>

    <p>Natural de Áinar.</p>

    <p class="term">Banta</p>

    <p>Aldea situada en la linde sur del bosque de Corocín.</p>

    <p class="term">Corocín</p>

    <p>
      Uno de los mayores bosques de Tramórea, situado entre Áinar, Ritión y las
      tierras de Málart. Recibe su nombre por los coruecos que aún merodean
      entre su espesura. Es allí donde vive Linar.
    </p>

    <p class="term">Corueco</p>

    <p>
      Bestia antropomorfa, de largos brazos, piel recubierta de escamas y huesos
      metálicos que en ocasiones se utilizan como armas. El corueco es omnívoro,
      aunque prefiere la carne, en especial la humana. Un corueco adulto suele
      superar los dos metros de altura y los trescientos cincuenta kilos de
      peso.
    </p>

    <p class="term">Feryí</p>

    <p>
      Distrito de Koras en el que se agrupa toda la población extranjera de la
      ciudad.
    </p>

    <p class="term">Guiños</p>

    <p>
      Desierto en el sureste de Áinar que linda con la Sierra Seca y la frontera
      de Ritión, y al norte con el bosque de Corocín. Está en la Ruta de la Seda
      que va de Áttim a Koras.
    </p>

    <p class="term">Hasha</p>

    <p>Parte final del filo de la espada.</p>

    <p class="term">Horda Roja</p>

    <p>
      Ejército de mercenarios que constituye un Estado independiente, fundado
      por Hairón. Tiene su sede en la fortaleza de Mígranz.
    </p>

    <p class="term">Ibtahán</p>

    <p>
      Maestro menor del Tahedo, entre el cuarto y el sexto grado, autorizado
      para adiestrar a discípulos de grados inferiores. El tratamiento abreviado
      para un Ibtahán es ib. A partir del quinto grado, a los Ibtahanes se les
      revela el secreto de Protahitéi, la primera aceleración. Las marcas que
      aparecen en el brazalete de los Ibtahanes son de color azul.
    </p>

    <p class="term">Kartine</p>

    <p>Diosa del destino. No pertenece a la familia de los Yúgaroi.</p>

    <p class="term">Kisha</p>

    <p>Punta de la espada.</p>

    <p class="term">Koras</p>

    <p>Capital de Ainar.</p>

    <p class="term">Luznago</p>

    <p>
      Insecto volador de gran tamaño que emite una potente luz. Los hay de
      varios colores, aunque los verdes son los más numerosos.
    </p>

    <p class="term">Niryiin</p>

    <p>Ondinas, ninfas de las aguas.</p>

    <p class="term">Protahitéi</p>

    <p><i>Primera aceleración</i> (véase Aceleración).</p>

    <p class="term">Ritión</p>

    <p>
      Confederación de ciudades e islas alrededor del Mar de Ritión. Se
      gobiernan mediante el Consejo de la Anfictionía. También se utiliza el
      término para los habitantes de Ritión.
    </p>

    <p class="term">Tahedo</p>

    <p>El Arte de la Espada.</p>

    <p class="term">Tahedorán</p>

    <p>
      Maestro mayor del Tahedo, autorizado para dar clase a todo tipo de
      discípulos, siempre que sean de grado inferior. Para convertirse en
      Tahedorán hay que conseguir siete marcas de maestría. Existen otros dos
      grados más, el octavo y el noveno, y un décimo que es honorífico y que tan
      solo posee el Maestre de Uhdanfiún. El tratamiento honorífico abreviado
      para un Tahedorán es tah. Se calcula que uno de cada cinco mil alumnos que
      empiezan a estudiar el Arte de la Espada llegan a convertirse en
      Tahedoranes. Todo Tahedorán debe dominar los secretos de las setenta y
      siete técnicas y las diez primeras series, hasta Taniarimya. Cuando
      alguien se convierte en Tahedorán, se le enseña el secreto de Mirtahitéi,
      la segunda aceleración. Se reconoce a un Tahedorán por las marcas rojas de
      su brazalete y por el diente de sable que lleva en el cinto.
    </p>

    <p class="term">Taniar</p>

    <p>
      La luna roja. Su ciclo es de veintiocho días. También es el nombre de una
      diosa guerrera, hija de Manígulat y de Himíe.
    </p>

    <p class="term">Tramórea</p>

    <p>
      Continente en el que se desarrolla la acción de <i>La Espada de Fuego</i>.
    </p>

    <p class="term">Uhdanfiún</p>

    <p>
      La academia de artes marciales más prestigiosa y antigua de Tramórea. Fue
      fundada por Áscalos hace más de quinientos años.
    </p>

    <p>
      En ella estudian sobre todo Ainari, aunque se admite a alumnos de otros
      lugares siempre que juren obediencia al emperador de Ainar y sirvan
      durante cinco años en su ejército.
    </p>

    <p class="term">Yagartéi</p>

    <p>
      Técnica de Tahedo que consiste en desenvainar la espada y a la vez dar un
      tajo de izquierda a derecha, normalmente para decapitar al adversario. La
      posición de partida puede ser sentado en el suelo, en una silla o de pie.
      La Yagartéi es un arte marcial en sí misma.
    </p>

    <p class="term">Zenordanil</p>

    <p>Primer mes del año. Coincidiría más o menos con diciembre.</p>`,
    actions: [
      {
        id: `intro`,
        text: `ir al principio`,
      },
    ],
  },
];

export const pages: PageDict = pageArray.reduce(
  (prev, curr) => ({ ...prev, [curr.id]: curr }),
  {},
);
