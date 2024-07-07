import { GameData } from './game-data.model';

export const GAME_DATA: GameData = {
  settings: {
    minDistance: 30,
    debugMode: true,
    hintCost: 25,
    hintLevelBonus: 15,
  },
  stages: {
    0: {
      title: 'Birthday Quest',
      message: `Добро пожаловать в праздничное приключение!<br><br>
      Тебе предстоит отгадать несколько загадок, в которых зашифрованы некоторые места в городе. Твоя задача отыскать их всех, чтобы дойти до финиша, где тебя будет ждать приз.<br>
      <br>
      Во время поиска локации, игра подскажет расстояние от тебя до цели. Можно так же пользоваться картой. Когда будешь на месте, нажми кнопку, чтобы перейти в следующему уровню.<br><br>
      Удачи!<br>
      <br>
      Всё понятно?`,
      nextCondition: {
        answer: 'да|ага|yes|ok|ок|понятно|si',
        location: null,
        minDistance: null,
      },
    },
    1: {
      title: 'Уровень 1: Разминка',
      message: `В сердце города старом, где прошлое дышит,<br>
                Где шпили собора небо колышут,<br>
                Площадь укрылась, как тайный цветок,<br>
                Здесь твой маршрут сделает первый шажок.<br>
                <br>
                Найти её просто - взгляни в небеса,<br>
                Где башня огромная режет глаза.<br>
                Собор величавый и Дева Святая<br>
                Подскажут твой путь, тебя направляя.<br>
                <br>
                Оазис малый среди мостовой,<br>
                Укрылся за каменною стеной.<br>
                Площадь имя хранит непростое -<br>
                Святую и море в нём ты откроешь.<br>
                <br>
                В центре её струи вверх бьют,<br>
                Наяды и боги в камне живут.<br>
                К фонтану подойди, где вода поёт,<br>
                А рядом сад зелёный тебя привлечёт.`,
      hint: `Ищи самый большой собор, площадь рядом с ним`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.476323711868446,
          long: -0.37529026991366704,
        },
        minDistance: 50,
      },
    },
    2: {
      title: 'Уровень 1: Разминка',
      message: `На площади древней, где время течёт,<br>
                Фонтан величавый прохладу несёт.<br>
                Морской повелитель здесь отдых нашёл,<br>
                Возлёг среди пены, как будто на трон.<br>
                <br>
                В руке его рог изобилия полный,<br>
                Фруктами спелыми доверху полон.<br>
                Бог вод и океанов, властитель морей,<br>
                Его имя знакомо из древних вестей.<br>
                <br>
                Римляне чтили его наравне с Зевсом,<br>
                Греки Посейдоном звали, известно.<br>
                Кто этот бородатый речной властелин,<br>
                Что в центре фонтана лежит не один?`,
      hint: `***т**`,
      nextCondition: {
        answer: 'нептун|neptuno|neptune',
        location: null,
        minDistance: null,
      },
    },

    3: {
      title: 'Уровень 2: Погружение',
      message: `В самом центре города<br> 
        Под куполом блестящим,<br> 
        Прилавки цветные зовут <br>
        На праздник настоящий. <br>
        <br>
        Рыбаки, мясники и фермеры в ряд, <br>
        Вкусы Валенсии каждому рады. <br>
        Найди это место, где жизнь течёт,<br>
        В ароматах и звуках город живёт.`,
      hint: `Рядом с La Lonja de la Seda`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.473767533205994,
          long: -0.37842933316904676,
        },
        minDistance: 50,
      },
    },
    4: {
      title: 'Уровень 2: Погружение',
      message: `В центре рынка, где купол блестит, 
      есть лавка, где всё всегда вкусно и сытно. 
      Имя её созвучно мему, что всем знаком, 
      и начнутся оба слова на букву одну.<br><br>

      Найди этот уголок, где их имена звучат, 
      и каждый день свежесть на прилавках лежит. 
      Ответом верным будет продукт, что они продают.`,
      hint: `*р***`,
      nextCondition: {
        answer: 'орехи|орех|nuts|nut',
        location: null,
        minDistance: null,
      },
    },

    5: {
      title: 'Уровень 3: Сердце города',
      message: `Сердце города бьётся здесь громко,<br>
                Площадь огромная, как на ладони.<br>
                Здесь власть и письма нашли свой приют,<br>
                В зданиях важных дела все идут.<br>
                <br>
                Мэр тут работает, письма летают,<br>
                Фонтан в центре площади небо пронзает.<br>
                Праздники, митинги – всё тут бывает,<br>
                И каждый свой путь сюда направляет.<br>
                <br>
                Модерн и барокко слились воедино,<br>
                Флаги трепещут, как в море дельфины.<br>
                Найди эту площадь, взгляни на часы,<br>
                Здесь время Валенсии, здесь её сны.`,
      hint: `Самое большое пустое пространство в городе`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.46974596048871,
          long: -0.3764592905760698,
        },
        minDistance: 50,
      },
    },
    6: {
      title: 'Уровень 3: Сердце города',
      message: `Среди суеты городского движенья,<br>
                Где почта и мэрия ведут совещанья,<br>
                Есть страж молчаливый, что смотрит на всех,<br>
                Но редко кто взгляд поднимает наверх.<br>
                <br>
                Чёрный и гордый, он замер навеки,<br>
                Как будто застыл в середине разбега.<br>
                Не издаёт звуков, сидит неподвижно,<br>
                Хоть мощь в нём видна, но ведёт себя сдержанно.<br>
                <br>
                Где площадь шумит и фонтаны искрятся,<br>
                Там страж притаился, не хочет назваться.<br>
                Подними свои очи, осмотрись не спеша,<br>
                И встретишь ты взгляд каменного стража.`,
      hint: `**в`,
      nextCondition: {
        answer: 'лев|lion',
        location: null,
        minDistance: null,
      },
    },

    7: {
      title: 'Уровень 4: Секретный уголок',
      message: `За спиной у гиганта, что поездов повелитель,<br>
                Скрывается тайна, зелёный обитель.<br>
                Дорога вдоль рельсов к нему приведёт,<br>
                Но мало кто знает, где клад этот ждёт.<br>
                <br>
                Модерн и природа сплелись воедино,<br>
                Здесь прошлое с будущим неразделимо.<br>
                Найди это место, где город вздохнул,<br>
                Где шум суеты наконец-то уснул.<br>
                <br>
                Хоть рядом он с центром, не каждый здесь был,<br>
                Секрет этот город надёжно хранил.<br>
                Чтоб клад отыскать, ты к нему поспеши,<br>
                За главным вокзалом свой путь соверши.`,
      hint: `Глупо, но на карте это место не зелёное. Зато имеет форму треугольника.`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.45767244657626,
          long: -0.37812418552983224,
        },
        minDistance: 50,
      },
    },

    8: {
      title: 'Уровень 4: Секретный уголок',
      message: `В зелёном оазисе, среди городских чудес,<br>
                Где парк расцветает, как сказочный лес,<br>
                Есть место особое - геометрии дань,<br>
                Где пальмы построились, словно в шеренгу встань.<br>
                <br>
                Фигурой квадратной они встали в ряд,<br>
                Как воины стройные, крепкий отряд.<br>
                Не горстка, не сотня их встала в кружок,<br>
                А столько, чтоб время отмерить ты смог.<br>
                <br>
                Найди это место, пересчитай,<br>
                И слово-ответ скорее узнай.<br>
                Оно не число, но смысл тот же самый,<br>
                Объединяет пальмы, как в головоломке занятной.`,
      hint: `д*****`,
      nextCondition: {
        answer: 'дюжина',
        location: null,
        minDistance: null,
      },
    },

    9: {
      title: 'Уровень 5: Спячка Титанов',
      message: `В сердце зелёного царства, где русло реки обмелело,<br>
                Гигант лилипутов пленил, распластавшись всем телом.<br>
                Не спит великан, а детишкам забава,<br>
                По складкам одежды бежать им на славу.<br>
                <br>
                Канаты и горки, лестницы, сети -<br>
                Всё это герой подарил как бы детям.<br>
                Огромен он ростом, но добр и не страшен,<br>
                Герой из страниц, в реальность украшен.`,
      hint: `Почти напрямик по Av. de Peris i Valero`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.462905440968385,
          long: -0.35969820143051917,
        },
        minDistance: 50,
      },
    },
    10: {
      title: 'Уровень 5: Спячка Титанов',
      message: `В парке, где река когда-то текла,<br>
                Рядом с великаном из детского сна,<br>
                Кружок из бронзы - веселье и смех,<br>
                Застывшая игра, что радует всех.<br>
                <br>
                Малыши за руки взялись в хоровод,<br>
                Смысл игры не каждый поймёт.<br>
                Что за предмет в основе лежит?<br>
                Овощ простой, что в земле норовит.<br>
                <br>
                Найди эту сценку, ответ назови,<br>
                И тайну скульптуры для всех оживи.`,
      hint: `***т**к*`,
      nextCondition: {
        answer: 'картошка|картофель|patata|potato',
        location: null,
        minDistance: null,
      },
    },

    11: {
      title: 'Уровень 6: Где всё начинается',
      message: `На границе сада, где аромат цветов витает,<br>
                Портал в неизведанное тихо ожидает.<br>
                Лестница вниз зовёт смельчаков,<br>
                В мир приключений, чудес и шагов.<br>
                <br>
                Здесь старт всех маршрутов и финиш дорог,<br>
                Отсюда умчаться ты можешь, дружок.<br>
                В любую часть города, в дальние дали,<br>
                Куда бы мечты тебя не позвали.<br>
                <br>
                Здесь наши прогулки берут свой исток,<br>
                И каждый маршрут начинается в срок.<br>
                Угадай это место, загадку реши,<br>
                И к новым открытиям смело спеши!`,
      hint: `Были там месяц назад`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.46791025380401,
          long: -0.3429519956761619,
        },
        minDistance: 50,
      },
    },
    12: {
      title: 'Уровень 6: Где всё начинается',
      message: `От подземных путей сделай несколько шагов,<br>
                В зелёный оазис, где шелест листов.<br>
                Там дворец небольшой, словно сказочный сон,<br>
                Восьмигранным куполом увенчан он.<br>
                <br>
                Фасад его древний историю хранит,<br>
                И тайну в числах своих таит.<br>
                Четыре цифры - ключ к разгадке твоей,<br>
                Год постройки найди поскорей.<br>
                <br>
                Взгляни на стены, прочти письмена,<br>
                Когда этот замок подняли со дна?<br>
                Века пролетели, а он всё стоит,<br>
                И время на камне своём сторожит.`,
      hint: `Не ну я не знаю, всё же написано!`,
      nextCondition: {
        answer: '1900',
        location: null,
        minDistance: null,
      },
    },

    13: {
      title: 'Уровень 7: Финальный забег',
      message: `Из моря земля поднимается вдаль,<br>
                Рядом с пляжем, где плещется волна.<br>
                Берег виден, словно на ладони,<br>
                Просторы дарят мечты, как весна.<br>
                <br>
                Где ветер поёт о свободе и силе,<br>
                Камни стоят величаво, гордо.<br>
                Земля эта хранит свои тайны и мили,<br>
                Море и небо встречаются твёрдо.<br>
                <br>
                Приди на край, где открывается вид,<br>
                Лучший из всех, что только можно найти.<br>
                Здесь ты поймёшь, что весь мир у тебя в руках,<br>
                На этой земле, где море и суша слились.`,
      hint: `Там еще с одной стороны ресторан, а с другой - лодочки`,
      nextCondition: {
        answer: null,
        location: {
          lat: 39.462440272994456,
          long: -0.312397680018576,
        },
        minDistance: null,
      },
    },

    14: {
      title: 'Победа!',
      message: `Поздравляю! Ты прошла все уровни!<br><br>
                Если всё прошло удачно, я жду тебя где-то рядом.<br>`,
      nextCondition: {
        answer: null,
        location: null,
        minDistance: null,
      },
    },
  },
};