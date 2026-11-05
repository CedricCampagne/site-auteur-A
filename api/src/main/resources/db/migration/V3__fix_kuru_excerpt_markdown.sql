-- =====================================================
-- FIX KURU EXCERPT MARKDOWN
-- =====================================================

UPDATE books
SET excerpt = $markdown$
J’avais peur désormais.

Peur de ce qu’il arriverait la prochaine fois que j’ouvrirai la porte de sa chambre.
Me reconnaîtrait-elle cette fois ?

J’attendais, l’oreille collée au bois, le cœur frappant mon sternum et l’esprit brouillé par l’appréhension. J’écoutais sa respiration rauque et sifflante, entrecoupée de petits râles plaintifs et de gémissements aigus qui n’avaient plus rien d’humain à présent.

Avant que la maladie ne se propage et que je ne sois obligé de l’attacher au lit, je la trouvais souvent rampant dans la chambre. Identique à cette monstrueuse araignée sculptée par Louise Bourgeois. Vulnérable, poignante, en équilibre improbable sur ses bras et ses jambes faméliques déformés par les tremblements, s’agitant d’une manière désordonnée pour parvenir jusqu’à moi.Elle avançait et je pouvais encore apercevoir, brillant dans ses yeux, une petite parcelle d’humanité. Je me disais qu’il y avait encore un espoir, qu’avec le temps et un traitement adapté, nous pourrions peut-être faire quelque chose pour la soigner. Que nous avions encore du temps.

C’était fini. je n’y croyais plus. Parce que la seule chose qui arrivait à la ramener, à faire d’elle un semblant d’être humain, c’était de dévorer un autre être humain. La cervelle essentiellement, le foie, le cœur… les abats aurait-on dit d’un animal.

J’avais tout tenté. De la cervelle de cochon, de veau… même celle d’un chien, une fois. Un bâtard laissé pour compte sur le bas-côté. Je l’avais achevé en sanglotant, les mains tremblantes, persuadé que ça servirait à quelque chose. Mais la cervelle animale ne prenait pas. Pas vraiment. Son corps rejetait l’effet comme une mauvaise came : quinze minutes d’illusion, une heure les bons jours, puis plus rien. Trop court. Trop faible. Pas assez pour qu’elle redevienne elle-même. Juste assez pour lui donner l’air d’un junkie en manque, perdu dans un shoot raté.

Avec la chair humaine, c’était différent. Radical. En cinq minutes à peine, le film laiteux qui noyait son regard se fendillait, puis disparaissait. Les morceaux épars de son esprit semblaient se recoller, comme si quelque chose, enfin, trouvait sa place. Elle tournait alors la tête vers moi et m’offrait ce sourire nouveau — un rictus mêlé de soulagement et de répulsion, adressé à ce qu’elle était devenue.
Elle trouvait la force de se redresser, parfois même de s’asseoir. Pas de marcher : pour ça, il aurait fallu tuer chaque jour, et je n’en avais pas le courage. Mais elle pouvait parler. Avec sa vraie voix. Pas ce râle animal qui lui déchirait la gorge lors des crises. Elle me souriait, me parlait en serrant ma main. S’excusait pour ce que j’étais contraint de faire. Me remerciait aussi. J’aimais ces instants plus que tout. Ça durait un jour, parfois deux. Puis le cauchemar revenait. Toujours plus vite. Toujours plus profond. Cette normalité fragile, presque crédible, qui rallumait l’espoir dans mon âme se heurtait à ma cruelle réalité : j’étais devenu un tueur, au seul service de sa survie.
$markdown$
WHERE slug = 'kuru';