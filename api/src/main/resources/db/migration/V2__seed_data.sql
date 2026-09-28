-- =====================================================
-- ROLES
-- =====================================================

INSERT INTO roles (name)
VALUES
    ('admin'),
    ('user');


-- =====================================================
-- USERS
-- =====================================================

INSERT INTO users (
    username,
    email,
    password,
    is_active
)
VALUES
    (
        'cedric',
        'cedric@example.com',
        '$2a$10$fMhKcV4hn.7YpAOxbCiOS.oykb7Gw.rgc2UlKg6Maamj0Ymhl9IKi',
        TRUE
    ),
    (
        'bob',
        'bob@example.com',
        '$2a$10$cTiDntrQiItSHbUg/wWhsupLnVh2S4a32yjiIvRDbISmm.WShT/aq',
        TRUE
    );


-- =====================================================
-- USER ROLES
-- =====================================================

INSERT INTO user_roles (user_id, role_id)
VALUES
    (
        (SELECT id FROM users WHERE username = 'cedric'),
        (SELECT id FROM roles WHERE name = 'admin')
    ),
    (
        (SELECT id FROM users WHERE username = 'bob'),
        (SELECT id FROM roles WHERE name = 'user')
    );


-- =====================================================
-- BOOKS
-- =====================================================

INSERT INTO books (
    title,
    slug,
    author,
    summary,
    excerpt,
    published_at,
    publisher,
    genre,
    cover_url,
    is_active
)
VALUES
    (
        'Kuru',
        'kuru',
        'Katia Campagne',

        $markdown$
Ils pensaient avoir éradiqué la maladie.
Ils avaient seulement déclenché le compte à rebours.

1957 en Nouvelle-Guinée, une population aborigène entière est décimée par une mystérieuse maladie neurologique.
Deux scientifiques découvrent l’impensable : un rituel funéraire ancestral où les morts sont consommés pour en hériter la force.Verdict scientifique : maladie spongiforme incurable. Aucun traitement.Aucune solution. Le gouvernement australien interdit aussitôt le cannibalisme rituel, et le fléau disparaît aussi vite qu’il est apparu.
Fin de l’histoire. Enfin… presque.

Car une donnée essentielle a été négligée.

Le virus est patient. Très patient.

Et son temps d’incubation est nettement plus long que la durée de vie d’un bon rapport scientifique.
$markdown$,

        $markdown$
J’avais peur désormais.

Peur de ce qu’il arriverait la prochaine fois que j’ouvrirai la porte de sa chambre.
Me reconnaîtrait-elle cette fois ?

    J’attendais, l’oreille collée au bois, le cœur frappant mon sternum et l’esprit brouillé par l’appréhension. J’écoutais sa respiration rauque et sifflante, entrecoupée de petits râles plaintifs et de gémissements aigus qui n’avaient plus rien d’humain à présent.
Avant que la maladie ne se propage et que je ne sois obligé de l’attacher au lit, je la trouvais souvent rampant dans la chambre. Identique à cette monstrueuse araignée sculptée par Louise Bourgeois. Vulnérable, poignante, en équilibre improbable sur ses bras et ses jambes faméliques déformés par les tremblements, s’agitant d’une  manière désordonnée pour parvenir jusqu’à moi.Elle avançait et je pouvais encore apercevoir, brillant dans ses yeux, une petite parcelle d’humanité. Je me disais qu’il y avait encore un espoir, qu’avec le temps et un traitement adapté, nous pourrions peut-être faire quelque chose pour la soigner. Que nous avions encore du temps.

C’était fini. je n’y croyais plus. Parce que la seule chose qui arrivait à la ramener, à faire d’elle un semblant d’être humain, c’était de dévorer un autre être humain. La cervelle essentiellement, le foie, le cœur… les abats aurait-on dit d’un animal.

J’avais tout tenté. De la cervelle de cochon, de veau… même celle d’un chien, une fois. Un bâtard  laissé pour compte sur le bas-côté. Je l’avais achevé en sanglotant, les mains tremblantes, persuadé que ça servirait à quelque chose. Mais la cervelle animale ne prenait pas. Pas vraiment. Son corps rejetait l’effet comme une mauvaise came : quinze minutes d’illusion, une heure les bons jours, puis plus rien. Trop court. Trop faible. Pas assez pour qu’elle redevienne elle-même. Juste assez pour lui donner l’air d’un junkie en manque, perdu dans un shoot raté.

Avec la chair humaine, c’était différent. Radical. En cinq minutes à peine, le film laiteux qui noyait son regard se fendillait, puis disparaissait. Les morceaux épars de son esprit semblaient se recoller, comme si quelque chose, enfin, trouvait sa place. Elle tournait alors la tête vers moi et m’offrait ce sourire nouveau — un rictus mêlé de soulagement et de répulsion, adressé à ce qu’elle était devenue.
Elle trouvait la force de se redresser, parfois même de s’asseoir. Pas de marcher : pour ça, il aurait fallu tuer chaque jour, et je n’en avais pas le courage. Mais elle pouvait parler. Avec sa vraie voix. Pas ce râle animal qui lui déchirait la gorge lors des crises. Elle me souriait, me parlait en serrant ma main. S’excusait pour ce que j’étais contraint de faire. Me remerciait aussi.            J’aimais ces instants plus que tout.  Ça durait un jour, parfois deux. Puis le cauchemar revenait. Toujours plus vite. Toujours plus profond. Cette normalité fragile, presque crédible, qui rallumait l’espoir dans mon âme se heurtait à ma cruelle réalité : j’étais devenu un tueur, au seul service de sa survie.
$markdown$,

        '2017-01-01',
        'Auto Édition',
        'Thriller',
        '/images/books/kuru.webp',
        TRUE
    ),

    (
        'American Witches',
        'american-witches',
        'Katia Campagne',

        $markdown$
Le corps d'une femme rousse est retrouvé sur un chemin de randonnée, à quelques kilomètres d'une bourgade américaine isolée. Démembrée, un parchemin enfoncé dans la gorge, la victime semble avoir fait l'objet d'une cérémonie macabre.

Mise en scène ou rituel consacré ?

La question se pose au coeur de Hinsdale, qui garde encore les traces des anciennes chasses aux sorcières. Chargé de l'enquête, Karl Rosenberg sait qu'il n'y coupera pas : pour sa dernière enquête, il va devoir affronter des légendes qu'il aurait préféré ne pas réveiller, et l'aide de son remplaçant ne sera pas de trop pour démêler les croyances de la réalité.

Car dans cette petite ville où tout se sait mais où personne ne parle, les mythes ont toujours un fond de vérité.
$markdown$,

        $markdown$
Le corps d'une femme rousse est retrouvé sur un chemin de randonnée, à quelques kilomètres d'une bourgade américaine isolée. Démembrée, un parchemin enfoncé dans la gorge, la victime semble avoir fait l'objet d'une cérémonie macabre.
$markdown$,

        '2021-01-14',
        'Hugo Roman',
        'Thriller',
        '/images/books/test3.webp',
        TRUE
    ),

    (
        'La légitimité du crime',
        'la-legitimite-du-crime',
        'Katia Campagne',

        $markdown$
Le cœur arraché.

La capitaine Mikaella Duval est chargée de l’enquête.

Flic brillante, hypersensible aux odeurs, Mikaella avance dans un monde saturé d’indices que les autres ne perçoivent pas. Son équipe est soudée, presque familiale. Son équilibre fragile, mais maîtrisé.

Jusqu’à ce qu’un deuxième meurtre survienne.

Et qu’une confession inattendue vienne troubler l’affaire.

Tandis qu’un nouveau membre intègre son équipe et que les tensions montent, Mikaella se retrouve confrontée à ses propres failles : un passé familial lourd, un psychologue troublant, et un jeune garçon qu’elle protège depuis des années, marqué par l’abandon et la violence.

Dans cette enquête où chaque vérité en cache une autre, une question s’impose :

Un crime peut-il être légitime ?

La légitimité du crime est un thriller psychologique intense sur les traumatismes, la loyauté, la manipulation et la frontière fragile entre justice et vengeance.
$markdown$,

        $markdown$
Pas d'extrait disponible.

En cours de correction...
$markdown$,

        '2026-03-13',
        NULL,
        'Thriller',
        '/images/books/legitimite-du-crime.webp',
        FALSE
    ),

    (
        'Dans mes veines (ancien IVM)',
        'dans-mes-veines-ancien-ivm',
        'Katia Campagne',

        $markdown$
Les fractures d'enfance ne guerissent jamais vraiment. Elles s’insinuent dans les veines, dans le corps et dans l’esprit, et murmurent dans le silence des nuits.

Eléane avait six ans lorsqu’elle a fui la Nouvelle-Ecosse.
Une fuite improvisée, brutale, avec sa mère prête à tout pour la protéger d’une secte où les hommes se prennent pour des dieux et où les petites filles sont promises au sang.

Des années plus tard, dans le Vercors, la vie semble avoir repris son cours. Nouvelle langue, nouvelles règles, apparence de tranquillité.

Mais certains souvenirs ne meurent jamais. Et quand des meurtres violents secouent la région, les fractures du passé refont surface. Chaque geste, chaque silence, chaque regard devient un écho de cette nuit qui a changé sa vie.

Et si certaines fuites étaient impossibles ?
$markdown$,

        $markdown$
Il parait que quelque soit la profondeur de l’obscurité, une seule lueur permet de la faire disparaître. Il faut croire que mon obscurité devait être vraiment trop profonde.

Je me rappelle le jour où c’est arrivé. Nous habitions à Dartmouth en ce temps-là, en Nouvelle-Ecosse, année 2013, le mois de novembre pour être exact. C’était un vendredi. L’heure je ne m’en souviens pas trop, je ne savais pas la lire à l’époque, mais il faisait nuit. Je me rappelle que la pluie frappait très fort contre le toit de notre petite maison à la façade bleue.  Dans King Street, les maisons étaient toutes peintes d’une couleur différente. Les gens la surnommaient la rue arc-en-ciel et pensaient qu’il devait être très agréable d’y vivre. La nôtre était d’un bleu pastel, hésitant entre un ciel d’août et une mer calme de décembre suivant que le soleil caresse ses murs ou non. Nos voisins étaient une maison jaune et une rose. Je n’aurais pas aimé habiter dans une maison rose.

Les bourrasques de vent gémissaient contre les volets clos, faisant craquer atrocement le bois.  J’avais l’impression qu’il nous suppliait de le laisser entrer, pour échapper à l’enfer qui se déchaînait dans la rue. Il ne savait pas, le pauvre, que l’enfer vivait chez nous. Ça faisait trois semaines déjà qu’il pleuvait sans discontinuer. Les caniveaux étaient arrivés à saturation, dégorgeaient sur le bitume une eau noire alarmante. L’eau des lacs alentour, Maynard, Oat Hill et Sullivan Pond venait s’étaler sur les pelouses des parcs habituellement si entretenues et qui prenaient désormais l’allure de marécages boueux. Un petit air des bayous de Louisiane sans le folklore ni les alligators. Sans les touristes, ni la fête. Sans rien pour ramener notre moral à l’équilibre.

J’étais là-haut. En train de regarder la tempête par le carreau de l'œil de bœuf. Enfant, j’aimais bien ce nom qu’on donnait à la fenêtre du grenier. Regarder par l'œil de bœuf ne signifiait-il pas que j’étais à l’intérieur de la bête ? Ça donnait à l’endroit une dimension protectrice. Je me rend compte maintenant à quel point c’était stupide.

Au moment où les phares de la voiture ont balayé la façade, une nouvelle bourrasque s’est accrochée au carreau. Le joint d’isolation n’avait pas résisté au temps et l’ampoule dénudée au plafond  s’est agitée. Je ne sais pas si on la voyait de l’extérieur, il aurait fallu lever la tête et braver les rafales de pluies pour ça, mais j’ai posé la main dessus. Au  cas où. Et je suis descendue de mon observatoire aussi ; une chaise en bois que j’avais posée sur le plateau d’un bureau. Etrangement j’avais peur de tout en ce temps là, mais pas de mes perchoirs brinquebalants. J’ai éteint la lumière - je n’avais pas non plus peur du noir - et je me suis collée contre le mur le plus proche. Entre un carton plein de livres, une pile de journaux aux caractères incompréhensibles et des vieux meubles cassés abandonnés là. On avait ça en commun. La cassure et l’abandon.

La tempête éclairait suffisamment la pièce pour me permettre de voir les traces de boue sèche qui s’étalaient de mon promontoir jusqu’à ma couche sur le sol. Les mêmes que celles qui m’avaient valu de me retrouver là. Que maman avait déjà dû nettoyer. Depuis combien de temps j’étais là ? Trois ? Quatre heures ? Suffisamment de temps en tout cas pour qu’elle nettoie tout. Les traces de boue, les débris de verre, un nouveau morceau de mon enfance qui s’était fracassé au sol. Suffisamment de temps pour que mon estomac réclame et puis comprenne qu’il avait largement dépassé l’heure du repas et que c’était trop tard à présent.

Je n’ai pas entendu les portes de la voiture claquer, ni la porte d’entrée s’ouvrir. Mais j’ai su qu’il était là. Il y avait toujours une certaine vibration dans l’air quand il était dans la maison. Quelque chose d’électrique qui venaient secouer les ions de notre organisme. Instinctivement, nous étions sur nos gardes. Toujours. Tout le temps. Toujours quand j’étais là-haut et qu’il revenait de ses réunions. Je me suis frottée le nez pour ne pas éternuer, l’odeur âcre et poussiéreuse des vieux journaux me chatouillait, mais il ne fallait pas qu’il m’entende. Une bête vibrait en lui ces soirs-là, pire que le boeuf gigantesque dans lequel j'imaginais me trouver et d’effrayant mon père devenait monstrueux, sauvage. Son regard abyssal semblait alors pouvoir pénétrer en moi. Ses pupilles élargies ne reflétaient que l’obscurité d’un gouffre sans fond dans lequel, j’en étais persuadée, il aurait pu m’aspirer goulûment.  Les mots roulaient sur sa langue du tréfond de sa gorge et frottaient sur ma nuque leurs petits aiguillons acérés. J’étais pétrifiée, physiquement.

La tempête s’est arrêtée d’un seul coup, comme si, elle-aussi, retenait son souffle en attendant l’issue de cette fin de soirée. Il n’y avait que deux options possibles : soit il montait me voir, soit il s’installait devant un match avec un pack de six. Le soulagement était alors si intense qu’il en devenait physiquement douloureux. Il m’étreignait le coeur avec une telle intensité qu’il aurait pu me tuer sur place. Assez ironique quand on y pense.

Nous avons attendu la tempête et moi, il n’est pas venu. C’est Allan qui est venu à sa place pour me délivrer. Deux ans d’écart et pourtant si vieux. Il était tout à la fois mon frère. Un père, une mère, un médecin, l’ancre à laquelle je m’accrochais sans cesse. Je me rappelle que ce fameux soir, une odeur étrange, quelque chose d’acide, flottait autour de lui. Il avait une urgence dans le regard. Une angoisse. Mais je ne l’ai pas compris.

Je n’ai compris que bien trop tard, des années plus tard en vérité, que c’est cet instant qui avait tout déterminé. Ce que je suis devenue et toute cette histoire. C’est à cet instant, dans ce regard que tout s’est joué. Je me souviens de tout : de l’odeur rance et confinée du grenier, du silence engrangé par la peur, de cette démangeaison sur mon poignet à cause d’une piqûre de moustique.  C’est amusant que je me souvienne encore de ces détails futiles.

Il parait que lorsque la mort approche, le film de notre vie se déroule sous nos yeux. Ça doit être à cause de ça que je me souviens de tout. Parce que j’ai le canon d’une arme  sous les yeux.
$markdown$,

        '2015-07-01',
        'autoédition',
        'Thriller',
        '/images/books/dans-mes-veines.webp',
        TRUE
    );


-- =====================================================
-- CHRONICLES
-- =====================================================

INSERT INTO chronicles (
    title,
    slug,
    quote,
    summary,
    content,
    cover_url,
    published_at,
    is_active
)
VALUES
    (
        'Le secret des secrets',
        'le-secret-des-secrets',
        'Ce livre ne donne pas de réponses définitives. Mais il ouvre des portes.',
        'Une réflexion intime sur le pouvoir des mots et leur capacité à façonner nos vies.',

        $markdown$
Ce soir c'est lecture et cette fois, je me suis plongée dans le fabuleux Le Secret des Secrets de Dan Brown.
Je m’étais lancée un défi : le lire en une semaine.
Peine perdue.

L’ampleur du roman, sa richesse, sa complexité et surtout mon plaisir presque obsessionnel à décortiquer chaque lieu évoqué ont eu raison de mon planning.Avec les romans de Dan Brown, je ne lis pas seulement une histoire : je voyage.
Cette fois, je me suis promenée dans Prague, ses rues, son histoire, son atmosphère… au point d’avoir maintenant une furieuse envie d’y aller pour de vrai.

J’ai adoré retrouver Robert Langdon, son intelligence, sa curiosité et son humanité.
Et j’avoue avoir été particulièrement heureuse de le voir évoluer et se poser enfin.

Mais ce qui m’a le plus fascinée reste le thème central : l'après-vie.
La conscience locale, non locale.
Les expériences, les hypothèses, les espoirs.

Sans être croyante, j’ai toujours eu du mal à accepter l’idée que la vie puisse simplement s’arrêter. Que des cellules minuscules, capables de créer un être qui pense, ressent, agit, aime… puissent disparaître brutalement, sans laisser de trace.
Ce roman joue précisément avec cette frontière entre science et mystère, et j’aime profondément me laisser entraîner dans ces questionnements.

Comme toujours avec Dan Brown, il y a ce mélange efficace d’action, de savoir scientifique, d’histoire, de symboles et de suspense qui rend la lecture addictive.
On apprend, on court, on réfléchit et on tourne les pages sans s’en rendre compte.

Ce livre ne donne pas de réponses définitives.
Mais il ouvre des portes.

Et parfois, c’est exactement ce j'ai besoin. Tu l'as lu ?

#avislittéraire #lesecretdessecrets #jclattès #danbrown #chutmamanecrit
$markdown$,

        '/images/chronicles/secret-des-secrets.webp',
        '2026-02-17',
        TRUE
    ),

    (
        '8,2 secondes',
        '8,2-secondes',
        'je t’embarque dans un roman où quelques secondes peuvent tout faire basculer : mourir… ou tomber amoureux.',
        '8,2 secondes. Un parallèle aussi intrigant que la construction de ce livre. Deux histoires, deux femmes que tout oppose.',

        $markdown$
Ami·e du thriller mais pas que, aujourd'hui, je t’embarque dans un roman où quelques secondes peuvent tout faire basculer : mourir… ou tomber amoureux.

8,2 secondes. Un parallèle aussi intrigant que la construction de ce livre. Deux histoires, deux femmes que tout oppose.

La première est flic. Grâce à son culot et à son talent, elle intègre une enquête sur un tueur en série qui sévit dans les rues de New York, sans signature évidente.
La seconde est une femme détruite par le double deuil de son mari et de son fils. Elle se réfugie dans le chalet de son enfance, à la frontière canadienne, pour décider si elle préfère vivre ou mourir.

Deux trajectoires, deux écritures. L’une est nerveuse, tendue, très thriller. L’autre est introspective et fantastique. Deux styles qui pourraient s’opposer, mais qui s’imbriquent finalement avec une fluidité étonnante.

J’ai beaucoup aimé cette construction qui nous balade entre deux récits indépendants, jusqu’à ce qu’ils commencent à s’emboîter l’un dans l’autre. Et cette phrase, vers la fin, qui a balayé mon hypothèse bancale sur le meurtrier. Le twist final, infernal et bouleversant, qui rebat entièrement les cartes.

Si tu aimes les thrillers qui jouent avec tes certitudes, casse le style et te retournent le cerveau à la dernière page, celui-ci est clairement pour toi. Tu me diras si tu avais vu venir le twist ?

#lecture #lectureaddict #bookstagramfrance #instalivre #thriller
$markdown$,

        '/images/chronicles/8.2.webp',
        '2023-01-21',
        TRUE
    ),

    (
        'cache-cache',
        'cache-cache',
        'Et si les comptines n’étaient plus faites pour jouer… mais pour tuer ?',
        'Cache-cache reste un thriller original, sombre et intelligent, qui joue avec nos nerfs et nos certitudes. ',

        $markdown$
Et si les comptines n’étaient plus faites pour jouer… mais pour tuer ?

Dans mes souvenirs d’enfance, elles étaient inoffensives. Ici, elles deviennent dangereuses, cruelles et un peu frustrantes.
Six ans après Octobre, je me suis replongée dans l’univers de Thulin et Hess. J’avoue, je les avais un peu oubliés. Alors retrouver leurs souvenirs communs, leur relation passée et ce qu’elle est devenue m’a vraiment plu. Hess est parti, Thulin a refait sa vie, changé de poste, pour retrouver un peu de tranquillité. Aucun des deux n’a envie de replonger dans l’horreur. Mais l’enquête, et ce qu'elle éveille en eux d'istinctif, ne leur laisse aucune échappatoire.

L’idée est brillante, retorse, délicieusement tordue. Rien n’est facile, surtout pas pour les enquêteurs. Ils doutent, hésitent, se trompent… et on doute avec eux. Même en flairant un personnage suspect, impossible pour moi de relier les fils jusqu’au bout. L'idée même des crimes est poussée très loin.

L’enquête est cependant longue, parfois frustrante. Des répétitions, beaucoup de réticen qui ralentissent le rythme, beaucoup de réticences dans les prises de décision. Peut-être un choix assumé par l’auteur, car malgré tout, à aucun moment, je n’ai eu envie d’arrêter ma lecture.

Moins marquant que Octobre, mais tout aussi solide, Cache-cache reste un thriller original, sombre et intelligent, qui joue avec nos nerfs et nos certitudes. Si vous aimez les enquêtes exigeantes, les idées audacieuses et les romans qui s’installent durablement dans votre tête, celui-ci mérite clairement votre attention.

#thriller #Octobre #cachecache #sorensveistrup #albinmichel
$markdown$,

        '/images/chronicles/cache-cache.webp',
        '2026-01-18',
        TRUE
    ),

    (
        'Le crépuscule de la veuvue blanche',
        'le-crepuscule-de-la-veuve-noire',
        'On navigue  entre passé et présent, dans la vie de cette tueuse à la personnalité si complexe qu''elle en devient attachante.',
        'Genji, youtubeur à succès spécialiste de dossiers criminels, remet à la une l''histoire de la veuve blanche ; une tueuse en série qui sévissait dans les années 2000 et morte il y a dix ans.',

        $markdown$
Ce soir on s'exporte au pays du soleil levant, ça te changera de la Corée, grâce au parfait Crépuscule de la veuve blanche de @cyril.carrere

Genji, youtubeur à succès spécialiste de dossiers criminels, remet à la une l'histoire de la veuve blanche ; une tueuse en série qui sévissait dans les années 2000 et morte il y a dix ans.
Certains commentaires, pourtant, s'étonnent de la ressemblance de ces crimes avec d'autres commis plus récemment, de quoi laisser planer le doute sur sa mort réelle. Junichi Kudo a tout perdu à cause de cette femme et pour lui ça ne fait aucun doute, la tueuse a bénéficié du service des évaporés afin d'échapper à la loi. Alors qu'il se lance dans une enquête éperdue pour la retrouver, il disparait à son tour.

Reprise de service pour Hayato Ishida et Noemie Legrand, après une première enquête au twist infernal qui m'avait retourné le cerveau. Du coup, je m'attendais à tout et j'ai echafaudé plusieurs hypothèses foireuses avant de laisser tomber. Et même si cette fois je n'ai pas été obligée de relire le début pour voir où je m'étais plantée, j'ai adoré le lien. Cette construction impeccable qui relie les deux opus. Ce petit nom qui tombe entre deux lignes et te fait dire : mais attends ! Tout est lié ??

On navigue  entre passé et présent, dans la vie de cette tueuse à la personnalité si complexe qu'elle en devient attachante, et dans l'enquête menée par la cellule teintée de plus d'émotions, d'espoir aussi,  Hayato étant directement lié cette fois à l'intrigue. J'ai trouvé qu'il mangeait moins du coup.

On découvre les évènements qui ont façonné le Japon, cette organisation si particulière qui permet aux gens de disparaître volontairement de la société, de tout ce que cela implique autour, du fric, de la renommée, de ceux qui restent.

J'ai adoré la fille de Noemie, son sens du tact et cette nouvelle relation qu'elle impose à nos deux flics.

Le rythme est intense, l'alternance de temporalité claire et précise, l'arc narratif des perso de plus en plus addictif et tu enchaines les chapitres sans les voir.

Jussi Adler-Olsen ayant brisé mon coeur avec la fin de sa série, Cyril je compte sur toi pour la relève.

#thriller
$markdown$,

        '/images/chronicles/le-crepuscule-de-la-veuve-noire.webp',
        '2025-12-04',
        TRUE
    );


-- =====================================================
-- COMMENTS
-- =====================================================

INSERT INTO comments (
    content,
    is_visible,
    user_id,
    chronicle_id
)
VALUES
    (
        'Une chronique qui donne vraiment envie de découvrir le livre. J''aime beaucoup le lien entre lecture et réflexion personnelle.',
        TRUE,
        (SELECT id FROM users WHERE username = 'cedric'),
        (SELECT id FROM chronicles WHERE slug = 'le-secret-des-secrets')
    ),
    (
        'J''aime bien quand une chronique arrive à donner envie de lire sans raconter toute l''histoire. Celle-ci fonctionne bien.',
        TRUE,
        (SELECT id FROM users WHERE username = 'bob'),
        (SELECT id FROM chronicles WHERE slug = 'le-secret-des-secrets')
    ),

    (
        'Le parallèle entre les deux histoires donne vraiment envie de voir comment elles finissent par se rejoindre.',
        TRUE,
        (SELECT id FROM users WHERE username = 'cedric'),
        (SELECT id FROM chronicles WHERE slug = '8,2-secondes')
    ),
    (
        'Le twist final semble être exactement le genre de chose qui me ferait tourner les pages jusqu''à la fin.',
        TRUE,
        (SELECT id FROM users WHERE username = 'bob'),
        (SELECT id FROM chronicles WHERE slug = '8,2-secondes')
    ),

    (
        'L''idée des comptines utilisées comme élément de l''enquête est vraiment originale. Ça donne envie de découvrir Cache-cache.',
        TRUE,
        (SELECT id FROM users WHERE username = 'cedric'),
        (SELECT id FROM chronicles WHERE slug = 'cache-cache')
    ),
    (
        'J''aime bien les enquêtes où on doute avec les personnages et où on ne comprend pas immédiatement comment les éléments sont liés.',
        TRUE,
        (SELECT id FROM users WHERE username = 'bob'),
        (SELECT id FROM chronicles WHERE slug = 'cache-cache')
    ),

    (
        'Le lien entre les deux enquêtes et les personnages semble particulièrement intéressant. Cette chronique donne envie de lire le roman.',
        TRUE,
        (SELECT id FROM users WHERE username = 'cedric'),
        (SELECT id FROM chronicles WHERE slug = 'le-crepuscule-de-la-veuve-noire')
    ),
    (
        'Le mélange entre enquête, passé et présent donne l''impression d''une histoire assez riche. J''aime beaucoup ce type de construction.',
        TRUE,
        (SELECT id FROM users WHERE username = 'bob'),
        (SELECT id FROM chronicles WHERE slug = 'le-crepuscule-de-la-veuve-noire')
    );