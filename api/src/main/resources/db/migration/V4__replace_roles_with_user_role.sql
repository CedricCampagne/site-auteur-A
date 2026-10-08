-- Ajout de la nouvelle colonne role
ALTER TABLE users
ADD COLUMN role VARCHAR(20);


-- Migration des rôles existants vers users.role
UPDATE users
SET role = 'ADMIN'
WHERE id = (
    SELECT user_id
    FROM user_roles
    WHERE role_id = (
        SELECT id
        FROM roles
        WHERE name = 'admin'
    )
);

UPDATE users
SET role = 'USER'
WHERE id = (
    SELECT user_id
    FROM user_roles
    WHERE role_id = (
        SELECT id
        FROM roles
        WHERE name = 'user'
    )
);


-- La colonne est maintenant obligatoire
ALTER TABLE users
ALTER COLUMN role SET NOT NULL;


-- Suppression de l'ancienne relation
DROP TABLE user_roles;


-- Suppression de l'ancienne table des rôles
DROP TABLE roles;