-- bikin table
CREATE TABLE testvoucherquery (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES testvoucherquery(id)
);
-- isi data
INSERT INTO testvoucherquery (id, name, parent_id)
VALUES (1, 'Zaki', 2),
    (2, 'Ilham', NULL),
    (3, 'Irwan', 2),
    (4, 'Arka', 3);
-- eksekusi query
SELECT child.id,
    child.name,
    parent.name AS parent_name
FROM testvoucherquery AS child
    LEFT JOIN testvoucherquery AS parent ON child.parent_id = parent.id;