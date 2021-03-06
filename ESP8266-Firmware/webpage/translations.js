// https://github.com/tinoni/translate.js
(function (a) { a.fn.translate = function (b) { var e = this; var d = { css: "trn", lang: "en" }; d = a.extend(d, b || {}); if (d.css.lastIndexOf(".", 0) !== 0) { d.css = "." + d.css } var c = d.t; this.lang = function (f) { if (f) { d.lang = f; this.translate(d) } return d.lang }; this.get = function (f) { var g = f; try { g = c[f][d.lang] } catch (h) { return f } if (g) { return g } else { return f } }; this.g = this.get; this.find(d.css).each(function (g) { var h = a(this); var f = h.attr("data-trn-key"); if (!f) { f = h.html(); h.attr("data-trn-key", f) } h.html(e.get(f)) }); return this } })(jQuery);

var translations = {
    "Home": {               //Text in English, has to match the HTML. (If the texts are very long could overflow the mobile interface, try to have a length similar to the English/Spanish translation.)
        fr: "Principal",    //French translation.
        es: "Inicio",       //Spanish translation.
        ru: "Главная"       //Russian translations.
    },
    "Stations": {
        fr: "Stations",
        es: "Emisoras",
        ru: "Станции"
    },
    "Settings": {
        fr: "Réglages",
        es: "Ajustes",
        ru: "Настройки"
    },
    "About": {
        fr: "A propos",
        es: "Acerca de",
        ru: "О программе"
    },
    "Language": {
        fr: "Langage",
        es: "Idioma",
        ru: "Язык"
    },
    "Select station": {
        fr: "Selection station",
        es: "Seleccionar emisora",
        ru: "Выбор станции"
    },
    "AutoPlay": {
        fr: "Lecture auto",
        es: "Auto reprod.",
        ru: "Автоплей"
    },
    "Station:": {
        fr: "Station:",
        es: "Emisora:",
        ru: "Станция"
    },
    "Playing:": {
        fr: "Lecture:",
        es: "Reproduc.:",
        ru: "Играет:"
    },
    "Volume:": {
        fr: "Volume:",
        es: "Volumen:",
        ru: "Громкость:"
    },
    "Station No:": {
        fr: "Station No:",
        es: "Estación núm:",
        ru: "Станция №:"
    },
    "Full": {
        fr: "Complet",
        es: "Detalles",
        ru: "Детали"
    },
    "Name:": {
        fr: "Nom:",
        es: "Nombre:",
        ru: "Имя:"
    },
    "Description:": {
        fr: "Description:",
        es: "Descripción:",
        ru: "Описание"
    },
    "Notice:": {
        fr: "Note:",
        es: "Metadatos:",
        ru: "Метадата:"
    },
    "Genre:": {
        fr: "Genre:",
        es: "Género:",
        ru: "Стиль:"
    },
    "Full URL:": {
        fr: "URL complète:",
        es: "URL completa:",
        ru: "Полный URL:"
    },
    "URL:": {
        fr: "URL:",
        es: "URL:",
        ru: "URL:"
    },
    "Bitrate:": {
        fr: "Bitrate:",
        es: "Tasa de bits:",
        ru: "Битрейт"
    },
    "Monitoring": {
        fr: "Lecture locale",
        es: "Reproducción local",
        ru: "Мониторинг"
    },
    "Volume:": {
        fr: "Volume:",
        es: "Volumen:",
        ru: "Громкость:"
    },
    "I'm sorry; your browser doesn't support HTML5": {
        fr: "Désolé, votre navigateur n'admet pas le HTML5",
        es: "Lo siento, su navegador no admite HTML5",
        ru: "Простите, Ваш браузер не поддерживает HTML5"
    },
    "Sleep / Wake": {
        fr: "Veille / Reveil",
        es: "Temporizador",
        ru: "Режим сна"
    },
    "Current time:": {
        fr: "Heure courante:",
        es: "Hora actual:",
        ru: "Текущее время:"
    },
    "Sleep:": {
        fr: "Veille:",
        es: "Dormir:",
        ru: "Сон:"
    },
    "Wake:": {
        fr: "Reveil:",
        es: "Despertar:",
        ru: "Пробуждение:"
    },
    "Instant play": {
        fr: "Lecture instantanée",
        es: "Reproducir ahora",
        ru: "Непрерывно играть"
    },
    "Domain:": {
        fr: "Domaine:",
        es: "Dominio:",
        ru: "Домен"
    },
    "Port:": {
        fr: "Port:",
        es: "Puerto:",
        ru: "Порт:"
    },
    "Path:": {
        fr: "Chemin:",
        es: "Ruta:",
        ru: "Путь:"
    },
    "Edit station": {
        fr: "Editer la station",
        es: "Editar emisora",
        ru: "Редактировать"
    },
    "Slot number:": {
        fr: "Case numéro:",
        es: "Número:",
        ru: "Номер:"
    },
    "Name:": {
        fr: "Nom:",
        es: "Nombre:",
        ru: "Имя:"
    },
    "Volume offset:": {
        fr: "Correction volume:",
        es: "Compensar volumen:",
        ru: "Смещение громкости:"
    },
    "Manage stations": {
        fr: "Gestion des stations",
        es: "Administrar emisoras",
        ru: "Редактировать станции"
    },
    "Reloaded the stations... Please Wait": {
        fr: "Chargement des stations... Attendez svp",
        es: "Recargando estaciones, por favor espere...",
        ru: "Перезагрузка станций, подождите..."
    },
    "The list is modified. Do you want to save the modified list?": {
        fr: "La liste est modifiée. Voulez vous sauvez la nouvelle liste?",
        es: "La lista ha sido modificada, ¿Guardar los cambios?",
        ru: "Список изменен. Хотите сохранить изменения?"
    },
    "Karadio Stations list": {
        fr: "Karadio: Liste des stations",
        es: "Karadio: lista de emisoras",
        ru: "Список станций Karadio"
    },
    "Warning: This will clear all stations.": {
        fr: "Attention: les stations vont être éffacées.",
        es: "Advertencia: Esto borrará todas las estaciones.",
        ru: "Предупреждение: Это очистит весь список станций."
    },
    "Be sure to save station before.": {
        fr: "Assurez vous de sauvez les stations avant.",
        es: "Asegúrese de guardar las estaciones antes.",
        ru: "Сохраните станцию перед этим."
    },
    "Clear now?": {
        fr: "Effacer maintenant?",
        es: "¿Borrarlas ahora?",
        ru: "Очистить?"
    },
    "No.": {
        fr: "No.",
        es: "#",
        ru: "№"
    },
    "Name": {
        fr: "Nom",
        es: "Nombre",
        ru: "Имя"
    },
    "URL": {
        fr: "URL",
        es: "URL",
        ru: "URL"
    },
    "Path": {
        fr: "Chemin",
        es: "Ruta",
        ru: "Путь"
    },
    "Port": {
        fr: "Port",
        es: "Puerto",
        ru: "Порт"
    },
    "Vol": {
        fr: "Vol.",
        es: "Vol.",
        ru: "Громк."
    },
    "Sound Setting": {
        fr: "Configuration audio",
        es: "Configuración de sonido",
        ru: "Настройки звука"
    },
    "Treble control:": {
        fr: "Contrôle des aigus:",
        es: "Control agudos:",
        ru: "Настройки тембра:"
    },
    "Treble freq:": {
        fr: "Fréquence des aigues:",
        es: "Frecuencia agudos:",
        ru: "Частота тембра:"
    },
    "Bass enhance:": {
        fr: "Augmentation des basses:",
        es: "Potenciar graves:",
        ru: "Улучшение басов:"
    },
    "Bass freq:": {
        fr: "Fréquence des basses:",
        es: "Frecuencia graves:",
        ru: "Частота басов:"
    },
    "Spacialization:": {
        fr: "Spacialisation:",
        es: "Espacialización:",
        ru: "Специализация:"
    },
    "Off": {
        fr: "Eteint",
        es: "Apagado",
        ru: "Выкл."
    },
    "Minimal": {
        fr: "Minimal",
        es: "Mínimo",
        ru: "Минимум"
    },
    "Normal": {
        fr: "Normal",
        es: "Normal",
        ru: "Нормально"
    },
    "Maximal": {
        fr: "Maximal",
        es: "Máximo",
        ru: "Максимум"
    },
    "Volume:": {
        fr: "Volume",
        es: "Volumen:",
        ru: "Громкость:"
    },
    "Stations Save and Restore": {
        fr: "Stations: Sauvegarde et restauration",
        es: "Guardar y restaurar emisoras",
        ru: "Сохранение и восстановление станций"
    },
    "Download:": {
        fr: "Téléchargement:",
        es: "Descargar:",
        ru: "Скачивание:"
    },
    "Download": {
        fr: "Téléchargement",
        es: "Descargar",
        ru: "Скачать"
    },
    "Restore:": {
        fr: "Restauration:",
        es: "Restaurar:",
        ru: "Восстановление"
    },
    "Restore": {
        fr: "Restauration",
        es: "Restaurar",
        ru: "Восстановить"
    },
    "Please select a file": {
        fr: "Veuillez selectionner un fichier",
        es: "Por favor, seleccione un archivo",
        ru: "Пожалуйста, выберите файл"
    },
    "WiFi and Network": {
        fr: "WiFi et réseau",
        es: "Configuración WiFi",
        ru: "Настройка WiFi"
    },
    "System reboot... Please Wait": {
        fr: "Le système redemarre. Veuillez patienter",
        es: "Karadio reiniciandose, por favor espere...",
        ru: "Перезагрузка... Подождите, пожалуйста"
    },
    "WiFi:": {
        fr: "WiFi:",
        es: "WiFi:",
        ru: "WiFi:"
    },
    "Password:": {
        fr: "Mot de passe:",
        es: "Contraseña:",
        ru: "Пароль:"
    },
    "Mac Address:": {
        fr: "Adresse MAC:",
        es: "Dirección MAC:",
        ru: "MAC-адрес:"
    },
    "Use DHCP:": {
        fr: "Utiliser DHCP:",
        es: "Usar DHCP:",
        ru: "Использовать DHCP:"
    },
    "IP:": {
        fr: "IP:",
        es: "IP:",
        ru: "IP:"
    },
    "Mask:": {
        fr: "Masque:",
        es: "Máscara:",
        ru: "Маска:"
    },
    "Gateway:": {
        fr: "Passerelle:",
        es: "Puerta:",
        ru: "Шлюз:"
    },
    "HTML Option": {
        fr: "Option HTML",
        es: "Opción HTML",
        ru: "Опции HTML"
    },
    "User Agent:": {
        fr: "Agent utilisateur:",
        es: "Agente de usuario:",
        ru: "Пользовательский агент:"
    },
    "Web Options": {
        fr: "Options Web:",
        es: "Opciones Web",
        ru: "Опции Web"
    },
    "Show a popup when new firmware is available.": {
        fr: "Montrer une fenêtre quand un nouveau logiciel est disponible.",
        es: "Mostrar un aviso cuando haya un nuevo firmware disponible.",
        ru: "Показывать уведомление, когда появится новая версия прошивки."
    },
    "Theme color:": {
        fr: "Couleur du thème:",
        es: "Color web:",
        ru: "Цветовая тема:"
    },
    "Upgrade firmware": {
        fr: "Mise à jour du logiciel",
        es: "Actualizar firmware",
        ru: "Обновление прошивки"
    },
    "Installed:": {
        fr: "Installé:",
        es: "Instalado:",
        ru: "Установлено:"
    },
    "Warning!": {
        fr: "Attention!",
        es: "¡Advertencia!",
        ru: "Внимание!"
    },
    "If you experiment some strange problems with karadio, please check if the adc (A0) pin is wired to Ground if you don't have a control panel.": {
        fr: "Si vous rencontrez d' étranges problèmes avec Karadio, veuillez vérifier que la broche adc (A0) est bien cablée sur gnd si vous n'utilisez pas le panneau de contrôle.",
        es: "Si experimenta un comportamiento extraño con karadio, compruebe que el pin adc (A0) este conectado a tierra si no tiene un panel de control.",
        ru: "Хьюстон, у нас проблемы! Проверьте, пожалуйста, соединен ли аналоговый пин A0 с землей, если не подключена панель кнопок."
    },
    "To update or reload the current release:": {
        fr: "Pour faire la mise à jour ou recharger la version courante:",
        es: "Para actualizar o volver a cargar la versión actual:",
        ru: "Чтобы обновить или перезагрузить текущий релиз:"
    },
    "Upgrade now": {
        fr: "Lancer la mise à jour",
        es: "Actualizar ahora",
        ru: "Обновить сейчас"
    },
    "Updating the firmware, please wait...": {
        fr: "Mise à jour en cours, Attendez svp...",
        es: "Actualizando el firmware, por favor espere...",
        ru: "Обновляется прошивка, пожалуйста подождите..."
    },
    "New firmware %1 available!": {
        fr: "Le logiciel %1 est disponible!",
        es: "¡Nuevo firmware %1 disponible!",
        ru: "Доступна новая прошивка %1!"
    },
    "Contributors": {
        fr: "Contributeurs",
        es: "Colaboradores",
        ru: "Участники"
    },
    "Author": {
        fr: "Auteur",
        es: "Autor",
        ru: "Автор"
    },
    "Developing": {
        fr: "Développement",
        es: "Desarrollando",
        ru: "Разработка"
    },
    "ESP8266-WebRadio: WiFi shoutcast player based on ESP8266 chip.": {
        fr: "ESP8266-WebRadio: lecteur WiFi de radion shoutcast basé sur la puce ESP8266",
        es: "ESP8266-WebRadio: reproductor WiFi de shoutcast basado en el chip ESP8266.",
        ru: "ESP8266-WebRadio: WiFi плеер потокового вещания на базе модуля ESP8266."
    },
    "Ka-Radio, a WiFi shoutcast player based on ESP8266 and VS1053b chips.": {
        fr: "Ka-Radio, lecteur WiFi de radion shoutcast basé sur la puce ESP8266",
        es: "Ka-Radio, un reproductor WiFi de shoutcast basado en los chips ESP8266 y VS1053b.",
        ru: "Ka-Radio, WiFi плеер потокового вещания на базе модуля ESP8266 и VS1053b."
    },
    "New web interface with Bootstrap and Material Design theme.": {
        fr: "Nouvel interface web basé sur Bootstrap et le thème Material Design.",
        es: "Nueva interfaz web con Bootstrap e interfaz Material Design.",
        ru: "Новый веб-интерфейс на базе Bootstrap и темы Material Design."
    },
    "Links": {
        fr: "Liens",
        es: "Enlaces",
        ru: "Ссылки"
    },
    "Donate": {
        fr: "Donation",
        es: "Donaciones",
        ru: "Пожертвование"
    },
    "If you like Karadio and want to contribute to the development (software and hardware), please donate, the amount is up to you.": {
        fr: "Si vous appréciez Karadio et voulez contribuer à son développement (logiciel et matériel), Merci de faire une donation du montant que vous souhaitez.",
        es: "Si te gusta Karadio y quieres contribuir al desarrollo (software y hardware), por favor done, la cantidad depende de ti.",
        ru: "Если Вам нравится Karadio и Вы хотите помочь разработке (софта и железа), пожалуйста, помогите деньгами, сумма - на Ваше усмотрение."
    },
    "Even one euro or $, I am so happy to know how many users appreciate this project.": {
        fr: "Même un euro ou $, je suis si heureux de connaitre combien d'utilisateurs apprécient ce projet.",
        es: "Incluso un euro o dólar, estoy muy feliz de saber cuántos usuarios aprecian este proyecto.",
        ru: "Даже если это будет один бакс или евро, Я буду рад."
    },
    "Thanks.": {
        fr: "Merci.",
        es: "Gracias.",
        ru: "Спасибо."
    },
    "Playlists": {
        fr: "Liste de lecture",
        es: "Listas de reproducción",
        ru: "Плейлисты"
    },
    "Description": {
        fr: "Description",
        es: "Descripción",
        ru: "Описание"
    },
    "Date": {
        fr: "Date",
        es: "Fecha",
        ru: "Дата"
    },
    "Updated": {
        fr: "Mis à jour",
        es: "Actualizado",
        ru: "Обновлено"
    },
    "New": {
        fr: "Nouveau",
        es: "Nuevo",
        ru: "Новый"
    },
    "Your prototypes": {
        fr: "Vos prototypes",
        es: "Sus prototipos",
        ru: "Ваши прототипы"
    },
    "See your prototypes": {
        fr: "Voyez vos prototypes",
        es: "Vea sus prototipos",
        ru: "Смотреть Ваши прототипы"
    },
    "Close": {
        fr: "Fermer",
        es: "Cerrar",
        ru: "Закрыть"
    },
    "Version": {
        fr: "Version",
        es: "Versión",
        ru: "Версия"
    },
    "Third-party libraries": {
        fr: "Librairies tiers",
        es: "Librerías de terceros",
        ru: "Сторонние библиотеки"
    },
    "History": {
        fr: "Historique",
        es: "Historial",
        ru: "История"
    },
    "Working... Please Wait": {
        fr: "En cours... Attendez svp",
        es: "Trabajando, por favor espere...",
        ru: "Идет обработка, подождите..."
    },
    "Error, try again": {
        fr: "Erreur, reessayez",
        es: "Error, vuelva a intentarlo",
        ru: "Ошибка, попробуйте еще раз"
    },
    "Started, Good night!": {
        fr: "Activé, Bonne nuit!",
        es: "Activado, !buenas noches!",
        ru: "Запущено, спокойной ночи!"
    },
    "Started": {
        fr: "Activé",
        es: "Activado",
        ru: "Запущено"
    }

};