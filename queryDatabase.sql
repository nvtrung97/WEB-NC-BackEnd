/*

 Source Server         : mySQL
 Source Server Type    : MySQL
 Source Host           : localhost:3306
 Source Schema         : academy

*/
create database academy CHARACTER SET utf8 COLLATE utf8_general_ci;
use academy;
SET FOREIGN_KEY_CHECKS = 0;



-- USERS
DROP TABLE IF EXISTS users;
CREATE TABLE users (
    _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(50) CHARACTER NOT NULL,
    birthday DATETIME NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(50) NOT NULL,
    role_id INT NOT NULL,
    create_at DATETIME,
    update_at DATETIME,
    PRIMARY KEY (_id)
  ) ENGINE = MyISAM AUTO_INCREMENT = 1;


-- CATEGORIES
DROP TABLE IF EXISTS categories;
CREATE TABLE categories  (
  _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NOT NULL,
  create_at DATETIME,
  update_at DATETIME,
  PRIMARY KEY (_id)
) ENGINE = MyISAM AUTO_INCREMENT = 1;


-- PRODUCTS
DROP TABLE IF EXISTS products;
CREATE TABLE products  (
  _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255)NOT NULL,
  user_id INT(11) NOT NULL,
  category_id INT(11) NOT NULL,
  url_image VARCHAR(255),
  short_description VARCHAR(100),
  full_description text,
  status VARCHAR(30) NOT NULL,
  score INT NOT NULL,
  number_reviews INT NOT NULL,
  number_students INT NOT NULL,
  create_at DATETIME,
  update_at DATETIME,
  PRIMARY KEY (_id)
) ENGINE = MyISAM AUTO_INCREMENT = 1;


-- VIDEOS
DROP TABLE IF EXISTS videos;
CREATE TABLE videos  (
  _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  user_id INT(11) NOT NULL,
  product_id INT(11) NOT NULL,
  chap_number INT NOT NULL,
  url text,
  description text,
  create_at DATETIME,
  update_at DATETIME,
  PRIMARY KEY (_id)
) ENGINE = MyISAM AUTO_INCREMENT = 1;


-- REVIEWS
DROP TABLE IF EXISTS reviews;
CREATE TABLE reviews  (
  _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(11) NOT NULL,
  product_id INT(11) NOT NULL,
  content VARCHAR(255) NOT NULL,
  score INT NOT NULL,
  create_at DATETIME,
  update_at DATETIME,
  PRIMARY KEY (_id)
) ENGINE = MyISAM AUTO_INCREMENT = 1;


-- WATCH_LISTS
DROP TABLE IF EXISTS watch_lists;
CREATE TABLE watch_lists  (
  _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(11) NOT NULL,
  product_id INT(11) NOT NULL,
  create_at DATETIME,
  update_at DATETIME,
  PRIMARY KEY (_id)
) ENGINE = MyISAM AUTO_INCREMENT = 1;


-- REGISTERED_LISTS
DROP TABLE IF EXISTS registered_lists;
CREATE TABLE registered_lists  (
  _id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT(11) NOT NULL,
  product_id INT(11) NOT NULL,
  video_pause_id INT(11),
  create_at DATETIME,
  update_at DATETIME,
  PRIMARY KEY (_id)
) ENGINE = MyISAM AUTO_INCREMENT = 1;

-- ----
ALTER TABLE products
ADD CONSTRAINT fk_product_category
FOREIGN KEY (category_id) REFERENCES categories(_id) ON DELETE CASCADE;

ALTER TABLE products
ADD CONSTRAINT fk_product_user
FOREIGN KEY (user_id) REFERENCES users(_id) ON DELETE CASCADE;


-- ----
ALTER TABLE videos
ADD CONSTRAINT fk_video_user
FOREIGN KEY (user_id) REFERENCES users(_id) ON DELETE CASCADE;

ALTER TABLE videos
ADD CONSTRAINT fk_video_product
FOREIGN KEY (product_id) REFERENCES products(_id) ON DELETE CASCADE;


-- ----
ALTER TABLE reviews
ADD CONSTRAINT fk_review_user
FOREIGN KEY (user_id) REFERENCES users(_id) ON DELETE CASCADE;

ALTER TABLE reviews
ADD CONSTRAINT fk_review_product
FOREIGN KEY (product_id) REFERENCES products(_id) ON DELETE CASCADE;


-- ----
ALTER TABLE watch_lists
ADD CONSTRAINT fk_watch_list_user
FOREIGN KEY (user_id) REFERENCES users(_id) ON DELETE CASCADE;

ALTER TABLE watch_lists
ADD CONSTRAINT fk_watch_list_product
FOREIGN KEY (product_id) REFERENCES products(_id) ON DELETE CASCADE;


-- ----
ALTER TABLE registered_lists
ADD CONSTRAINT fk_registered_list_user
FOREIGN KEY (user_id) REFERENCES users(_id) ON DELETE CASCADE;

ALTER TABLE registered_lists
ADD CONSTRAINT fk_registered_list_product
FOREIGN KEY (product_id) REFERENCES products(_id) ON DELETE CASCADE;

-- BEGIN;
--  INSERT INTO products VALUES(1, 'Khóa Học Tiếng Anh Cơ Bản','Cải thiện tiếng anh nhanh chóng', 'Khóa học sẽ giúp bạn khắc phục tất cả khó khăn ngay ban đầu, khơi nguồn niềm đam mê với TIẾNG ANH. Khóa học cho bạn biết được cách học tiếng Anh đúng cách. Các bạn sẽ được nhập vai vào các tình huống tiếng Anh giao tiếp hết sức thú vị thực tế hàng ngày.', 1500000, 1, 83),
--  (2, 'Khóa học tiếng anh Nâng cao', '14 1/2 Carat Created Pink Sapphire Sterling Silver Bracelet w/ Diamond Accents', '<P><STRONG>Tiếng Anh có khoảng 750.000 từ vựng. Nhưng thực ra, nếu bạn nắm được 3000 từ thông dụng nhất, bạn có thể thành thạo 4 kỹ năng tiếng anh mà nhiều người hằng mong đợi. Khóa học sẽ giúp bạn hệ thống lại những kiến thức vốn có của mình một cách khoa học và giúp bạn nắm chắc 4 kỹ năng quan trọng của tiếng anh.</STRONG></P>\r\n<UL>\r\n    <LI>Loại hàng: Hàng trong nước</LI>\r\n</UL>\r\n', 300000, 1, 64),

-- (3, 'Khóa Học Tiếng Anh Dành Cho người đi làm', 'Nâng cao thu nhập nếu học giỏi tiếng anh', '<P>Bạn phải suy nghĩ, lắp ghép và phản xạ khá chậm khi tương tác bằng tiếng Anh? Bạn thiếu tự tin và bối rối khi tương tác trong môi trường xã giao đẳng cấp, kinh doanh quốc tế ? Khóa học sẽ giúp bạn phát âm chuẩn, phản xạ nhanh, tự tin giao tiếp tiếng Anh ở bất kì nơi nào có người nói tiếng Anh. </P>\r\n<UL>\r\n    <LI>Kiểu sản phẩm: Khóa học</LI>\r\n    <LI>Thể loại:Sách dạy tiếng anh</LI>\r\n    <LI>Hình thức học: Online</LI>\r\n    <LI>Đơn giá: còn thuộc vào VIP</LI>\r\n</UL>\r\n', 1600000000, 1, 86) ,


-- (4, 'Lập trình C/C++', 'Giáo viên được các học viên bình chọn xuất xắc', '<P>Khóa học giúp trang bị cho học viên các kỹ năng lập trình được minh hoạ cụ thể bằng ngôn ngữ lập trình C/C++ từ cơ bản đến nâng cao. Đây là khóa học tạo tiền đề tốt cho việc tiếp cận phương pháp lập trình hướng đối tượng, một phương pháp lập trình cần phải có của một lập trình viên.<BR>\r\nKết hợp việc dạy song song hai ngôn ngữ C/C++ giúp hiểu rõ hơn về lập trình</P>\r\n<UL>\r\n    <LI>Nhà cung cấp: Kim Đồng</LI>\r\n    <LI>Nhà Xuất bản: Hảo </LI>\r\n    <LI>Dạy theo giáo trình USA</LI>\r\n</UL>\r\n', 42000000, 2, 63),



-- (5, 'Lập trình java', 'Hướng Dẫn Tạo Ứng dụng java basic với Database', '<P>Khóa học cung cấp trọn bộ kiến thức lập trình Java, cung cấp kiến thức để tiếp cận lập trình Android, có khả năng tiếp tục phát triển phần mềm Java nâng cao: Swing, kết nối cơ sở dữ liệu,…<BR>\r\Giúp hiểu rõ hơn về lập trình</P>\r\n<UL>\r\n    <LI>Nhà cung cấp: Kim Đồng</LI>\r\n    <LI>Nhà Xuất bản: Hảo </LI>\r\n    <LI>Dạy theo giáo trình USA</LI>\r\n</UL>\r\n', 2900000, 2, 0),


-- (6, 'Lập Trình PHP', 'Demo bằng môt web bán hàng thực tế', '<UL>\r\n    <LI>Khóa học sẽ giúp bạn thành thạo lập trình Backend cho website, cách tư duy lập trình theo hướng Model - View - Controller <~~ đây là vấn đề rất quan trọng trong lập trình hiện đại Tự làm một số phần mềm quản lý cho riêng mình </LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n', 180000, 2, 62),

-- (7, 'Lập Trình Python', 'Áp dụng công nghệ hiện đại', '<UL>\r\n    <LI>Khóa học sẽ cung cấp nội dung đầy đủ và kỹ càng nhất về ngôn ngữ lập trình Python để từ đó bạn có thể áp dụng Python vào các công việc bạn muốn hướng tới hoặc tạo thêm nhiều cơ hội việc làm cho bạn. </LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n' , 2800000, 2, 15),


-- (8, 'Lập Trình C#', 'DEMO bằng app quản lý phòng nét', '<UL>\r\n    <LI>Khóa học cung cấp trọn bộ kiến thức cơ bản của lập trình C# , học viên có thể tạo ra một ứng dụng C# hoàn chỉnh sau khi hoàn thành khóa học </LI>\r\n    <LI>Xuất xứ: Tp Hồ Chí Minh</LI>\r\n</UL>\r\n', 270000, 2, 74),



-- (9, 'Cách bắt chuyện người khác', 'Cách kinh nghiệm được cách người giỏi về lĩnh vực giao tiếp lưu lại', 'Bạn đang khó khăn trong việc tiếp cận hay bắt chuyện với người khác? Đừng lo lắng, khóa học sẽ giúp bạn xóa bỏ ngay mọi khó khăn trên cùng với việc thực hành trực tiếp với nhiều giảng viên chuyên nghiệp ', 2400000, 3, 43),(10, 'Cách Lắng nghe', 'Giúp bạn được người khác chú ý', '<UL>\r\n    <LI> Khuynh hướng ánh kim có thể thể hiện trên vàng, bạc, đỏ tía, xanh biển, vàng tím, trắng và đen.</LI>\r\n    <LI>Một số biến tấu mang tính vui nhộn là vàng chanh, màu hoa vân anh và ngọc lam; trong đó hoàng kim và nhũ bạc khá phổ biến.</LI>\r\n    <LI>Phong cách: Diềm đăng ten, rủ xuống theo chiều thẳng đứng, nhiều lớp, cổ chẻ sâu, eo chít cao tới ngực... được biến tấu tùy theo mỗi nhà thiết kế.</LI>\r\n</UL>\r\n', 2800000, 3, 80),



-- (11, 'Cách ứng xử khi bị chê', 'Kinh nghiệm từ các người nổi tiếng', '<UL>\r\n    <LI>Khóa học sẽ giúp các bạn hiểu chính xác được những gì bạn cần làm để chiếm được niềm tin, lòng yêu mến của người khác. Bạn sẽ biết cách ứng xử trong giao tiếp với từng tình huống giao tiếp, cần sử dụng những cách thể hiện, cách ứng xử, hành động, ánh mắt để khiến người khách ấn tượng tốt</LI>\r\n    <LI>Số lượng buổi học:30</LI>\r\n    <LI>Thời Gian:45p</LI>\r\n    <LI>Hình thực học: OnlineLI>\r\n    <LI>Giá bán có thể thay đổi tùy theo trọng lượng và giá vàng của từng thời điểm.</LI>\r\n</UL>\r\n', 250000, 3, 88),(12, 'Dạy con đúng cách', 'Được bác sĩ tự vấn trực tiếp khi tham gia khóa học', '<UL>\r\n    <LI>Hành xử đúng đắn với con cái</LI>\r\n    <LI>Số lượng buổi học:30</LI>\r\n    <LI>Thời Gian:45p</LI>\r\n    <LI>Hình thực học: OnlineLI>\r\n    <LI>Giá bán có thể thay đổi tùy theo trọng lượng và giá vàng của từng thời điểm.</LI>\r\n</UL>\r\n', 120000, 3, 61),(13, 'Cách bắt chuyện với khách hàng mới', 'Tạo không khí quen thuộc khi bắt chuyện với người lạ', '<P>Những đường cong tuyệt đẹp sẽ càng được phô bày khi diện các thiết kế này.</P>\r\n<UL>\r\n    <LI>Nét cắt táo bạo ở ngực giúp bạn gái thêm phần quyến rũ, ngay cả khi không có trang&nbsp; sức nào trên người.</LI>\r\n    <LI>Đầm hai dây thật điệu đà với nơ xinh trước ngực nhưng trông bạn vẫn toát lên vẻ tinh nghịch và bụi bặm nhờ thiết kế đầm bí độc đáo cùng sắc màu sẫm.</LI>\r\n    <LI>Hãng sản xuất: NEM</LI>\r\n    <LI>Kích cỡ : Tất cả các kích cỡ</LI>\r\n    <LI>Kiểu dáng : Quây/Ống</LI>\r\n    <LI>Chất liệu : Satin</LI>\r\n    <LI>Màu : đen, đỏ</LI>\r\n    <LI>Xuất xứ : Việt Nam</LI>\r\n</UL>\r\n', 2600000, 4, 92),



-- (14, 'Cách Ứng xử khi bị khách hàng chê mắc', 'Phương pháp chia nhỏ giá thành SP', 'Bạn đã bao bị khách hàng sản phẩm của mình mắc chưa? Sau khi hoàn thành khóa học này bạn sẽ sớm làm chủ được cuộc giao tiếp với bấ kỳ đối phương nào, tăng sự tự tin và chinh phục được cuộc giao tiếp một cách thật thông minh, tinh tế và khéo léo!<UL>\r\n    <LI>Lấy cảm tỉnh từ lần đầu gặp mặt</LI>\r\n    <LI>Số lượng buổi học:30</LI>\r\n    <LI>Thời Gian:45p</LI>\r\n    <LI>Hình thực học: OnlineLI>\r\n    <LI>Giá bán có thể thay đổi tùy theo trọng lượng và giá vàng của từng thời điểm.</LI>\r\n</UL>\r\n', 1200000, 4, 0),



-- (15, 'Người khách Hàng tiềm năng', 'Khách hàng tiềm năng khi gặp lần đầu tiên', 'Nghệ thuật giao tiếp sẽ giúp bạn mở thêm nhiều mối quan hệ một cách thông minh, tinh tế, làm tăng giá trị sâu sắc hay tạo sự hấp dẫn cho chính bản thân bạn trong tất cả các cuộc giao tiếp, khiến đối phương phải cảm thấy hấp dẫn, thú vị cũng như nể phục.<UL>\r\n    <LI>Lấy cảm tỉnh từ lần đầu gặp mặt</LI>\r\n    <LI>Số lượng buổi học:30</LI>\r\n    <LI>Thời Gian:45p</LI>\r\n    <LI>Hình thực học: OnlineLI>\r\n    <LI>Giá bán có thể thay đổi tùy theo trọng lượng và giá vàng của từng thời điểm.</LI>\r\n</UL>\r\n', 1925000, 4, 22),



--  (16, 'Kĩ năng seller chuyên nghiệp', 'Tăng trình độ bán hàng từ cơ bản đến nâng cao', '<UL>\r\n    <LI>Camera mega pixel : 2 mega pixel</LI>\r\n    <LI>Bộ nhớ trong : 16 - 31 mb</LI>\r\n    <LI>Chức năng : quay phim, ghi âm, nghe đài FM</LI>\r\n    <LI>Hỗ trợ: Bluetooth, thẻ nhớ nài, nhạc MP3 &lt;br/&gt;</LI>\r\n    <LI>Trọng lượng (g) : 124g</LI>\r\n    <LI>Kích thước (mm) : 109 x 53 x 21.8 mm</LI>\r\n    <LI>Ngôn ngữ : Có tiếng việt</LI>\r\n    <LI>Hệ điều hành: Symbian OS 8.1</LI>\r\n</UL>\r\n', 3200000, 4, 81),


 
 
--   (17, 'Khóa học Photoshop', 'Kĩ năng thiết kế chuyên nghiệp với PTS', '<UL>\r\n    <LI>Bạn đã bao giờ bị choáng ngợp bởi những poster "độc và ngầu" của các designer chuyên nghiệp?</LI>\r\n    <LI>CBạn khao khát tạo ra bức ảnh đẹp, thể hiện phong cách riêng mình? Thật đơn giản để hiện thực hóa mong ước bằng phần mềm Photoshop.</LI>\r\n    <LI>Khóa học sẽ giúp bạn biết cách sử dụng các công cụ, tính năng trong Photoshop; từ đó bạn sẽ tự tay chỉnh sửa được những bức ảnh trở nên sống động, sáng tạo theo ý thích riêng, cùng với hiệu ứng chữ đẹp mắt….</LI>\r\n</UL>\r\n', 1820000, 5, 33),




--  (18, 'Khóa Học AI', 'Sử dụng thành thạo AI sau 1 tuần', '<UL>\r\n    <LI>Bạn mong muốn trở thành nhà thiết kế chuyên nghiệp? Hay tự tay sáng tạo những bức hình, ý tưởng mới lạ, đẹp mắt, không thể bỏ qua phần mềm đồ họa Ai.</LI>\r\n    <LI>Khóa học Adobe Illustrator từ cơ bản đến nâng cao sẽ giúp bạn từ chưa biết gì trở thành “master” về Ai.</LI>\r\n    <LI>bạn có thể tự do thể hiện ý tưởng, tạo logo, icons, poster, banner, thậm chí là vẽ hoạt hình, vẽ bản đồ, in ấn tùy chỉnh màu sắc….</LI>\r\n    ', 3400000, 5, 10),



--  (19, 'Khóa học Premiere', 'Dựng video theo ý tưởng của bản thân bạn', '<UL>\r\n    <LI>Bạn là người yêu làm phim, muốn theo đuổi nghề làm phim chuyên nghiệp hay mục đích sử dụng làm phim marketing cho doanh nghiệp thì khóa học này là dành cho bạn.</LI>\r\n    <LI>Khóa học trang bị đầy đủ những kiến thức cơ bản, giúp bạn có nền tảng vững vàng với nghề dựng phim chuyên nghiệp.</LI>\r\n    <LI>Khóa học cô đọng, xúc tích, dễ hiểu, áp dụng được ngay kiến thức vào công việc, tiết kiệm thời gian học và làm nhanh chóng.</LI>\r\n</UL>\r\n', 1820000, 5, 17),


--  (20, 'Khóa Học vẽ 3D', 'Dựng những mô hình chuyện nghiệp', '<UL>\r\n    <LI>Bạn muốn tạo ra những sản phẩm 3D nhưng lại không có kiến thức về mảng này?</LI>\r\n    <LI>Bạn là người hiện đại, không muốn vi phạm bản quyền, không muốn sử dụng các phần mềm bẻ khóa</LI>\r\n    <LI>Hãy tham giá khóa học ngay bây giờ để được cung cấp các kiến thức về thiết kế những mô hình 3D nhé</LI>\r\n</UL>\r\n', 540000, 5, 0),


 
 
--  (21, 'Dạy Cách tôn trọng người khác', 'Nâng cao nhận thức của người trưởng thành', '<UL>\r\n    <LI>Khi muốn thể hiện sự tôn trọng, bạn cần đặt bản thân vào vị trí của người khác và cư xử sao cho họ thấy được sự quan tâm của bạn</LI>\r\n    <LI>Khóa học sẽ cung cấp cho bạn các kĩ năng  giao tiếp, ứng xử  để lắng nghe và phản hồi sáng suốt để tôn trọng người khác và để người khác tôn trọng mình</LI>\r\n</UL>\r\n', 300000, 6, 74),


 
--  (22, 'Phong cách sống của người thành công', 'Kinh nghiệm từ những người nổi tiếng và thành công', '<UL>\r\n    <LI>Có bao giờ bạn tự đặt câu hỏi tại sao nhiều người quá thành công trong sự nghiệp và đời sống? Liệu đó có phải là may mắn?</LI>\r\n    <LI>May mắn chỉ là góp một phần nhỏ trong sự thành công của họ mà thôi, Khóa học sẽ chỉ ra cho bạn những phẩm chất tạo nên sự khác biệt của người thành công.</LI>\r\n</UL>\r\n', 290000, 6, 30),


 
 
--  (23, 'Sống để không cảm thấy uổng phí', 'Tìm ra những trãi nghiệm của bản thân', '<P><STRONG>Thông tin khóa học</STRONG></P>\r\n<UL>\r\n    <LI>Có những việc làm khiến cho chúng ta rất hứng thú và dành rất nhiều thời gian cho nó, nhưng bạn lại nhầm vì chợt nhận ra ngày lại qua ngày bạn hình thành những thói quen đó sẽ khiến bạn tiếc đứt ruột vì đã lãng phí tuổi trẻ của chính mình.</LI>\r\n    <LI>Khóa học sẽ cung cấp cho bạn những điều cần phải thay đổi ngay lập tức để thấy cuộc sống ý nghĩa hơn</LI>\r\n    </UL>\r\n', 3600000, 6, 5),


--  (24, 'Hãy cảm ơn thay vì xin lỗi', 'Những bài học quý giá rút ra từ lời cảm ơn và xin lỗi', '<P><STRONG>Thông tin khóa học</STRONG></P>\r\n<UL>\r\n    <LI>Chúng ta vẫn thường xin lỗi vì những sai lầm của bản thân, cho rằng điều đó thể hiện phép lịch sự tối thiểu. Tuy nhiên, sự thật hoàn toàn khác hẳn!</LI>\r\n    <LI>Thật ra con người thích được công nhận và trân trọng lòng tốt hay sự kiên nhẫn của họ hơn là nghe "Tôi xin lỗi" cả trăm lần.</LI>\r\n    <LI>Khóa học sẽ giúp bạn nhận ra trong một số trường hợp "cảm ơn bạn" sẽ có tác dụng hơn "tôi xin lỗi"</LI>\r\n</UL>\r\n', 14900000, 6, 22),

 
 
--  (25, 'CK010', 'Độc đáo, sang trọng', '<UL>\r\n    <LI>Kiểu dáng nam tính và độc đáo, những thiết kế dưới đây đáp ứng được mọi yêu cần khó tính nhất của người sở hữu.</LI>\r\n    <LI>Những hạt kim cương sẽ giúp người đeo nó tăng thêm phần sành điệu</LI>\r\n    <LI>Không chỉ có kiểu dáng truyền thống chỉ có một hạt kim cương ở giữa, các nhà thiết kế đã tạo những những chiếc nhẫn vô cùng độc đáo và tinh tế.</LI>\r\n    <LI>Tuy nhiên, giá của đồ trang sức này thì chỉ có dân chơi mới có thể kham được</LI>\r\n</UL>\r\n', 2147483647, 7, 52),


--  (26, 'CK009', 'Nữ tính - đầy quí phái', '<UL>\r\n    <LI>Để sở hữu một chiếc nhẫn kim cương lấp lánh trên tay, bạn phải là người chịu chi và sành điệu.</LI>\r\n    <LI>Với sự kết hợp khéo léo và độc đáo giữa kim cương và Saphia, Ruby... những chiếc nhẫn càng trở nên giá trị</LI>\r\n    <LI>Nhà sản xuất: Torrini</LI>\r\n</UL>\r\n<P>Cái này rất phù hợp cho bạn khi tặng nàng</P>\r\n', 1850000000, 7, 11),

--  (27, 'CK007', 'Sự kết hợp khéo léo, độc đáo', '<UL>\r\n    <LI>Để sở hữu một chiếc nhẫn kim cương lấp lánh trên tay, bạn phải là người chịu chi và sành điệu.</LI>\r\n    <LI>Với sự kết hợp khéo léo và độc đáo giữa kim cương và Saphia, Ruby... những chiếc nhẫn càng trở nên giá trị</LI>\r\n    <LI>Nhà sản xuất: Torrini</LI>\r\n</UL>\r\n<P>Cái này rất phù hợp cho bạn khi tặng nàng</P>\r\n', 2147483647, 7, 28),

--  (28, 'CK005', 'Tinh xảo - sang trọng', '<UL>\r\n    <LI>Kim cương luôn là đồ trang sức thể hiện đẳng cấp của người sử dụng.</LI>\r\n    <LI>Không phải nói nhiều về những kiểu nhẫn dưới đây, chỉ có thể gói gọn trong cụm từ: tinh xảo và sang trọng</LI>\r\n    <LI>Thông tin nhà sản xuất: Torrini</LI>\r\n    <LI>Thông tin chi tiết: Cái này rất phù hợp cho bạn khi tặng nàng</LI>\r\n</UL>\r\n', 1800000000, 7, 29),

--  (29, 'NV01TT', 'Tinh tế đến không ngờ', '<UL>\r\n    <LI>Tinh xảo và sang trọng</LI>\r\n    <LI>Thông tin nhà sản xuất: Torrini</LI>\r\n    <LI>Không chỉ có kiểu dáng truyền thống chỉ có một hạt kim cương ở giữa, các nhà thiết kế đã tạo những những chiếc nhẫn vô cùng độc đáo và tinh tế.</LI>\r\n    <LI>Tuy nhiên, giá của đồ trang sức này thì chỉ có dân chơi mới có thể kham được</LI>\r\n</UL>\r\n', 500000000, 7, 49),


--  (30, 'Motorola W377', 'Nữ tính - trẻ trung', '<UL>\r\n    <LI>General: 2G Network, GSM 900 / 1800 / 1900</LI>\r\n    <LI>Size:&nbsp; 99 x 45 x 18.6 mm, 73 cc</LI>\r\n    <LI>Weight: 95 g</LI>\r\n    <LI>Display: type TFT, 65K colors</LI>\r\n    <LI>Size: 128 x 160 pixels, 28 x 35 mm</LI>\r\n</UL>\r\n', 2400000, 7, 0),

-- (31, 'Ngữ Pháp Tiếng anh thông dụng', 'Tài liệu đạt chuẩn quốc tế', '<UL>\r\n    <LI>Khóa học cung cấp cho bạn kiến thức toàn bộ về Ngữ pháp tiếng Anh cơ bản</LI>\r\n    <LI>Khóa học là các bài giảng ngắn gọn, xúc tích, mang tính ứng dụng cao. Sau mỗi phần giảng về lí thuyết đều có bài tập đi kèm, giúp bạn hiểu và áp dụng được ngay.      </LI>\r\n</UL>\r\n', 300000, 1, 74);
-- commit;
