-- テストユーザーの追加
INSERT INTO users (id, username, password, email) VALUES
(1, 'testuser1', '$2a$10$YoInqve1a3c2h41kwSO2yek/LcYW2z94l31M6TVuywmlUs92BzRvi', 'testuser1@example.com'),
(2, 'testuser2', '$$2a$10$YoInqve1a3c2h41kwSO2yek/LcYW2z94l31M6TVuywmlUs92BzRvi', 'testuser2@example.com');

-- テストタスクの追加
INSERT INTO todos (title, description, completed, user_id) VALUES
('買い物リスト', '週末の買い物リスト', false, 1),
('プロジェクトの進捗', 'プロジェクトの進捗状況を確認', false, 1); 