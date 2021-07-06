-- add users
-- pass =1
INSERT INTO users (email, password, email_confirmed,full_name, birthday, address, role)
VALUES 
('hao@gmail.com', '$2a$13$bfhJiF15Rrf6EbsxVeGtTOB0z3/j2XjxTedeVjE53/4yEtSYYwiGu', true, 'Nguyễn Hào', '1999/09/24', 'ktx B TPHCM',1),
('trieu@gmail.com', '$2a$13$bfhJiF15Rrf6EbsxVeGtTOB0z3/j2XjxTedeVjE53/4yEtSYYwiGu', true, 'Mang Triệu', '1999/09/4', 'ktx B TPHCM',1),
('ngon@gmail.com', '$2a$13$bfhJiF15Rrf6EbsxVeGtTOB0z3/j2XjxTedeVjE53/4yEtSYYwiGu', true, 'Nguyễn Ngôn', '1999/05/24', 'Quận 5 TPHCM',1),
('thanh@gmail.com', '$2a$13$bfhJiF15Rrf6EbsxVeGtTOB0z3/j2XjxTedeVjE53/4yEtSYYwiGu', true, 'Nguyễn Thanh', '1994/02/24', 'Nguyễn Văn Cừ, quận 5, TPHCM',1),
('nhat@gmail.com', '$2a$13$bfhJiF15Rrf6EbsxVeGtTOB0z3/j2XjxTedeVjE53/4yEtSYYwiGu', true, 'Nguyễn Nhật', '1992/09/24', 'ktx A TPHCM',1);
-- add categories
INSERT INTO categories (_id,name)
VALUES 
(1, 'Khóa học lập trình'),
(2, 'Khóa học tiếng anh'),
(3, 'Khóa học hóa học'),
(4, 'Khóa học đồ họa');
-- products
INSERT INTO products (name, user_id, category_id, url_image, short_description, full_description, url_driver)
VALUES 
('jQuery',1 ,1,'https://1.bp.blogspot.com/-P08TU96yQsU/VrB0Vcqq88I/AAAAAAAADSU/muRglwvmY5g/s1600/jquery-icon.png','Khóa học cung cấp những kiến thức về lập trình jQuery từ cơ bản đến nâng cao, giúp bạn thiết kế được một trang web sống động, thu hút người xem.',
'Tại sao nên học jQuery?
- Với sự phát triển nhanh chóng của Internet, người dùng ngày càng đòi hỏi
cao hơn về giao diện và hình thức của một trang Web.
- Nếu như trước đây, một trang Web có banner, nội dung và footer đơn giản
đã được coi là đẹp thì ngày nay, một trang Web có banner bắt mắt, nội dung
lôi cuốn kèm theo các hiệu ứng mới lạ mới có thể thu hút được người đọc lâu 
dài.
Đây cũng chính là nguyên nhân mà các developers, web designers cần thiết 
phải nâng cao tay nghề. Và một trong những công cụ cần thiết đến từ các thư
viện JavaScript mở được quan tâm nhiều nhất đó là jQuery - công cụ giúp bạn 
tạo ra các hiệu ứng có thể tương tác trực tiếp với người đọc một cách nhanh
chóng và dễ dàng hơn so với việc sử dụng thuần JavaScript.
Vậy bắt đầu học jQuery như thế nào?
- Rất nhiều lập trình viên muốn tìm hiểu và vận dụng những tính năng tối ưu
của jQuery nhưng không biết bắt đầu từ đâu và như thế nào.
Chính vì vậy, Edumall mang đến cho bạn khóa học "jQuery cơ bản đến nâng
cao" giúp các bạn có thể chỉnh sửa giao diện của một website bất kì;
tăng khả năng tương tác với người dùng; tạo hiệu ứng động giúp phụ họa nội 
dung; lấy thông tin từ server mà không cần tải lại trang web; có khả năng tự 
đọc hiểu các tài liệu tự lập trình jQuery trong suốt khóa học này.
Sau khóa học này, bạn sẽ:
- Sử dụng thành thạo jQuery.
- Có khả năng lập trình và quản trị Web phục vụ nhu cầu giải trí, kinh doanh, 
khởi nghiệp.
- Đọc và hiểu các thuật ngữ về jQuery một cách thuần thục.
HẸN GẶP LẠI CÁC BẠN TRONG KHÓA HỌC!
Yêu cầu của khóa học
• Có máy tính kết nối với internet.
• Sử dụng tai nghe để học.
Lợi ích từ khóa học
• Học được cách sử dụng công cụ Chrome Developer Tool trong thiết kế web hiện đại
• Thao tác với thư viện jQuery, jQuery UI, Tweenmax
• Tự xây dựng các plugin mới bằng jQuery
• Nâng cao khả năng tự đọc hiểu các tài liệu tự lập trình jQuery
• Tăng khả năng tương tác với người dùng
• Tạo hiệu ứng động cho những thay đổi của nội dung, tài liệu
• Lấy thông tin từ server mà không cần tải lại trang web
• Có khả năng chỉnh sửa giao diện của một Webside bất kì','https://drive.google.com/drive/folders/0B4fU5__VXkIkVzI1V3BwYXotcTQ'),
('Git',1 ,1,'https://res.cloudinary.com/dominhhai/image/upload/code/git.png','Chuyên mục tổng hợp các chủ đề học git | git toàn tập miễn phí, bạn có thể tham khảo và sử dụng tài liệu học git | git toàn tập mà tại đây.',
'Git là một công cụ quản trị version rất nổi tiếng hiện nay,
thậm chí bây giờ các nhà tuyển dụng còn đưa Git vào giống như một tiêu chuẩn khi tuyển dụng, 
vì vậy việc nắm bắt công cụ này là điều bắt buộc với các lập trình viên.
Nhằm giúp các bạn dễ dàng tiếp cận Git hơn thì trong chuyên mục học git này mình sẽ trình bày tất cả kiến thức liên quan,
từ Git căn bản cho đến Github hay Gitlab, hy vọng series sẽ hữu ích với các bạn.','https://drive.google.com/drive/folders/0B4fU5__VXkIkdGZzdk5qMWFSVjg'),
('Java thao tác tệp tin',1,1,'https://brandslogos.com/wp-content/uploads/images/large/java-logo-1.png', 'Trong bài hướng dẫn này tôi chỉ đề cập tới việc sử dụng lớp java.io.File','Đọc và ghi file trong java là các hoạt động nhập/xuất dữ liệu (nhập dữ liệu từ bàn phím, đọc dữ liệu từ file, ghi dữ liệu lên màn hình, ghi ra file, ghi ra đĩa, ghi ra máy in…) đều được gọi là luồng (stream).','https://drive.google.com/drive/folders/1MtGpuPiXU-N_L7phYrOC9nNLeoiIgE5u'),
('Java xử lí phân luồng',1, 1, 'https://gpcoder.com/wp-content/uploads/2018/02/java-multithread.png','Đa nhiệm dựa trên đơn tiến trình (Process) – Đa tiến trình (Multiprocessing)','Thread là gì? Multi-thread là gì?
Thread (luồng) về cơ bản là một tiến trình con (sub-process). Một đơn vị xử lý nhỏ nhất của máy tính có thể thực hiện một công việc riêng biệt. Trong Java, các luồng được quản lý bởi máy ảo Java (JVM).
Multi-thread (đa luồng) là một tiến trình thực hiện nhiều luồng đồng thời. Một ứng dụng Java ngoài luồng chính có thể có các luồng khác thực thi đồng thời làm ứng dụng chạy nhanh và hiệu quả hơn.','https://drive.google.com/drive/folders/1MZm9KtqsCmNIGJd6FVYdC0dhlEDuWTE5'),
('Java thư viện đồ họa Swing', 1, 1, 'https://devpro.edu.vn/uploads/studies/1533113810.png', 'Java Swing là một phần của Java Foundation Classes (JFC) được sử dụng để tạo các ứng dụng Window-Based. Nó được xây dựng ở trên cùng của AWT (Abstract Windowing Toolkit) API và được viết hoàn toàn bằng Java.', 'Không giống AWT, Java Swing cung cấp các thành phần (Component) gọn nhẹ và độc lập nền tảng. Javax.swing. Package cung cấp các lớp cho Java Swing chảng hạn như JButton, JTextField, JTextArea, JRadioButton, JCheckbox, JMenu, JColorChooser, …', 'https://drive.google.com/drive/folders/18ujfZ3RJZ0NnuQ1_AyDb5FZscOqIHQ20'),
('Java thư viện đồ họa Swing', 1, 1, 'https://devpro.edu.vn/uploads/studies/1533113810.png', 'Java Swing là một phần của Java Foundation Classes (JFC) được sử dụng để tạo các ứng dụng Window-Based. Nó được xây dựng ở trên cùng của AWT (Abstract Windowing Toolkit) API và được viết hoàn toàn bằng Java.', 'Không giống AWT, Java Swing cung cấp các thành phần (Component) gọn nhẹ và độc lập nền tảng. Javax.swing. Package cung cấp các lớp cho Java Swing chảng hạn như JButton, JTextField, JTextArea, JRadioButton, JCheckbox, JMenu, JColorChooser, …', 'https://drive.google.com/drive/folders/18ujfZ3RJZ0NnuQ1_AyDb5FZscOqIHQ20'),
('PHP laravel', 2, 1, 'https://banner2.cleanpng.com/20180920/hq/kisspng-laravel-software-framework-web-framework-php-zend-laravel-software-framework-php-web-framework-model-5ba3437deb19e7.104986071537426301963.jpg','Khoá Học laravel tại ZendVN Offline từ cơ bản đến Nâng cao Cam kết Hiệu Quả. Đồ Án thực tế','Khóa học Lập trình PHP với Laravel Framework được NIIT - ICT HÀ NỘI xây dựng nhằm hoàn thiện kỹ năng lập trình web cho các bạn đã biết Lập trình Web PHP thuần.
Học cách làm việc với PHP Framework để sẵn sàng làm việc ngay tại Doanh nghiệp, tăng tốc Lập trình Web, tăng chất lượng dự án...
Thời lượng: 42 giờ
Ca học: 18:30 - 20:30
Phương pháp: Thực hành >85%
Giảng viên: Chuyên gia Doanh nghiệp
BẢO HÀNH: HỌC LẦN 2 MIỄN PHÍ.
TẶNG: Khóa học Git + jQuery
','https://drive.google.com/drive/folders/16z-lW9Z5YF9sAxQOPydt7OX5lHT8zK10'),
('Lập trình PHP từ cơ bản đến nâng cao', 2, 1, 'https://banner2.cleanpng.com/20180723/yh/kisspng-logo-php-computer-icons-postgresql-logo-5b559bb38d3097.2908767015323370755783.jpg', 'Khóa học lập trình PHP online sẽ giúp cho các bạn tự học PHP một cách dễ dàng. Khóa học lập trình này cung cấp cho bạn kiến thức PHP từ căn bản đến nâng cao', 'Khóa học lập trình PHP online sẽ giúp cho các bạn tự học PHP một cách dễ dàng. Khóa học lập trình này cung cấp cho bạn kiến thức PHP từ căn bản đến nâng','https://drive.google.com/drive/folders/1zLT0p8Ym0HUyqsnDfL3K0KY79qiE1Kij'),
('Tìm hiểu dự án mã nguồn mở', 3, 1, 'https://banner2.cleanpng.com/20180625/thc/kisspng-net-framework-software-framework-c-microsoft-asp-ms-logo-5b313fce876081.9578708415299542545545.jpg', 'Khóa học này được thiết kế bởi TEDU sử dụng từ phiên bản ASP.NET Core 2.2 trở đi và sẽ bao gồm các bài từ nền tảng cơ bản đến nâng cao cho tất cả mọi người', 'Nội dung khóa học
Khóa học này gồm 2 nội dung chính là phần 1 sẽ bao gồm các kiến thức căn bản về ASP.NET MVC Core cũng như là mô hình MVC và các tính năng mới trong ASP.NET Core. Phần hai sẽ là phần xây dựng một dự án thật từ đầu đến cuối sử dụng ASP.NET Core.
Yêu cầu đầu vào
Đầu vào các bạn sẽ cần có kiến thức C# căn bản, HTML CSS và Javascript. Nếu có kiến thức ASP.NET rồi thì tốt còn không thì cũng không sao.
Kết quả đạt được
Sau khóa học các bạn có thể tự làm một website hoàn chỉnh và có thể hiểu chắc chắn các kiến thức về mô hình MVC cũng như các khái niệm trong lập trình web nói chung và lập trình ASP.NET MVC nói riêng. Trong quá trình học nếu có gì khó khăn các bạn có thể thảo luận ngay tại video phần bình luận.','https://drive.google.com/drive/folders/1IE_GDrpLA5D3ow0pj49h7dIOomt4M9Iz'),
('Học wordpress căn bản', 3, 1, 'https://banner2.cleanpng.com/20180526/ige/kisspng-wordpress-computer-icons-logo-5b0a12cf9a76a9.7667646415273868316327.jpg','Tham gia khóa học thiết kế Web bằng Wordpress tại TPHCM bạn hoàn toàn có thể tự tay thiết kế cho mình một website sau khi học khóa học Wordpress tử a-z','Bạn đang cần có một website và tìm đến các khóa học thiết kế web chuyên nghiệp từ căn bản đến nâng cao với mong muốn tự tay mình xấy dụng được website cho công ty hoặc cá nhân của mình. Khóa học thiết kế website bằng WordPress là giải pháp hoàn hảo cho bạn và công ty bạn. Bạn không cần phải biết lập trình nhưng vẫn có thể tự thiết kế cho mình một website chuyên nghiệp với đầy đủ tính năng và thông tin, từ đó thu hút được lượng khách hàng tiềm năng với chi phí thấp nhất mang lại hiệu quả rất cao.','https://drive.google.com/drive/folders/1u6BALgbupf_u9cBGJ8LX8FOswjZE2yKt'),
('Cấu trúc dữ liệu và giải thuật',3, 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO85657S3eROK14YnaxrvleQk2AOVtQ6NS5WxZuQpWcJ8pw_kvAwQXipYBuCRpq7G1zP_XA-l3&usqp=CAc','Cấu trúc dữ liệu và giải thuật(CTDL & GT) là sự kết hợp và áp dụng một hoặc nhiều cấu trúc dữ liệu nào đó vào một hoặc nhiều thuật toán nào đó để có được đầu ra mong muốn một cách tối ưu và tốt nhất khi dữ liệu có số lượng cực lớn','Cấu trúc dữ liệu và giải thuật (Data Structure and Algorithms) - Học Cấu trúc dữ liệu & giải thuật với ngôn ngữ C, C++ và Java theo các bước cơ bản tới nâng','https://drive.google.com/drive/folders/0B4fU5__VXkIkU3doaF9td080ek0'),
('CỐT LỖI JAVA WEB VS JSP', 1, 1, 'https://image.flaticon.com/icons/png/512/3291/3291697.png','Các JSP page có thể được sử dụng để kết nối với Servlet mà xử lý Business logic, mô hình được hỗ trợ bởi Java Servlet.', 'JavaServer Pages (JSP) là gì?

JavaServer Pages (JSP) là một công nghệ để phát triển các Webpage mà hỗ trợ nội dung động, giúp các lập trình viên chèn java code vào trong các HTML page bằng việc sử dụng các JSP tag đặc biệt, hầu hết bắt đầu với <% và kết thúc với %>.

Một thành phần JavaServer Pages (JSP) là một loại Java Servlet, được thiết kế để thực hiện vai trò của một giao diện người dùng (User Interface) cho một ứng dụng Java Web. Lập trình viên Web viết JSPs như là các text file mà kết nối HTML code hoặc XHTML code, phần tử XHTML, và các JSP actions và câu lệnh JSP được nhúng.','https://drive.google.com/drive/folders/0B4fU5__VXkIkQVRlMWUzYWZtVDA'),
('Tính từ và trạng từ', 4, 2, 'https://jes.edu.vn/wp-content/uploads/2017/09/cac-tinh-tu-thong-dung-trong-tieng-anh.png','Trạng từ (hay còn gọi là phó từ) trong tiếng Anh gọi là adverb. Trạng từ là những từ dùng để bổ nghĩa cho động từ, tính từ, một trạng từ khác hay cho cả câu.','Trạng từ trong tiếng anh – Full công thức và bài tập (CÓ ĐÁP ...
và trước tính từ: "tobe/feel/look"... + adv + adj. Cấu trúc thường dùng: ADV + ADJ. Ex: She is very nice. Sau “too ...','https://drive.google.com/drive/folders/1SF6I0yzoCW2b2k8XL_BmX5oF-mHF2Pds'),
('Cấp so sánh và đại từ', 4, 2, 'https://cdnstepup.r.worldssl.net/wp-content/uploads/2020/09/ai-bia-dai-tu-nhan-xung.jpg', 'Đại từ nhân xưng. Là loại đại từ dùng để thay thế danh từ, động từ, tính từ, cụm danh từ… và còn gọi là đại từ chỉ ngôi, cụ thể có 3 ngôi chính gồm: Ngôi thứ nhất để chỉ người nói, nó tương đương với danh từ.','Trong ngôn ngữ học và ngữ pháp, một đại từ hay đại danh từ là một dạng thế thay thế cho một danh từ có hoặc không có từ hạn định, ví dụ: you và they trong tiếng Anh. Ngữ được thay thế được gọi là tiền ngữ của đại từ. Ví dụ chúng ta xét câu "Lisa gave the coat to Phil.', 'https://drive.google.com/drive/folders/1XkErUtMRyHaDdimH503tgWryjAfpfdcc'),
('Câu hỏi về loại từ trong thi đại học', 4, 2, 'https://icdn.dantri.com.vn/thumb_w/640/2020/04/13/thi-thpt-quoc-gia-1586772060406.jpg', 'Khóa học ôn, luyện thi đại học PEN-C môn Tiếng Anh giúp ôn luyện toàn diện kiến thức, kĩ năng và phương pháp cho học sinh tham dự thi đại học hàng năm', 'Giáo viên dạy lại, ôn kĩ và đầy đủ các kiến thức theo trình tự từ dễ tới khó. Khóa học phù hợp với những học sinh cần ôn kĩ, tỉ mỉ theo phương châm học tới đâu chắc điểm tới đó.', 'https://drive.google.com/drive/folders/1qAJLJIgdmfsRRI8YvJ0nAtee0KtDN6aU'),
('CHUYÊN ĐỀ 01. CÁC ĐỊNH LUẬT- ỨNG DỤNG',4, 3, 'https://monngonmienbac.net/wp-content/uploads/2017/06/ung-dung-cua-hoa-hoc-trong-doi-song-hang-ngay.jpg','Hoá học ứng dụng cuộc sống. Những kiến thức dưới đây có thể đã rất quen thuộc nhưng vẫn còn nhiều kiến thức tưởng chừng ...','Việc áp dụng Hóa học cho phép bạn tìm các phản ứng hóa học và để giải quyết các phương trình hóa học với một hoặc nhiều biến rõ. Bạn sẽ luôn có định kỳ ...','https://drive.google.com/drive/folders/1VzK1PGoYQ5vOMC5HRrwrYk7LQgoa3xVw'),
('CHUYÊN ĐỀ 02 . KIM LOẠI PHẢN ỨNG VỚI AXIT', 4, 3, 'https://hayhochoi.vn/thumbs_size/news/2019_01/[630x420-cr]tinh-chat-cua-kim-loai-va-day-dien-hoa-lop-12-bai-18.jpg', 'Khi quẹt, P đỏ tác dụng với chất oxy hóa, phản ứng tỏa nhiều nhiệt làm cháy thuốc ... gây ô nhiễm, gián tiếp góp phần làm tăng hiệu ứng nhà kính do CO2 gây ra. ... Ở chỗ mối hàn, kim loại dễ bị gỉ: hiện tượng ăn mòn điện hoá học thường xảy','Mục đích của họ là một chất gọi là "Hòn đá triết học" dùng để biến đổi những chất như chì thành vàng. ... Loại phản ứng hóa học mà một chất có thể trải qua và sự thay đổi năng ... Công nghiệp hóa học là một ngành kinh tế rất quan trọng.','https://drive.google.com/drive/folders/1qE89GlmlIzQlpb5O31bMVH6YBAV8pFsc'),
('CHUYÊN ĐỀ 03 . OXIT PHAN ỨNG VỚI AXIT', 4, 3, 'https://tech12h.com/sites/default/files/styles/inbody400/public/kimloai.jpg', 'Chuyên đề: phương pháp giải toán oxit axit CO2(SO2) tác dụng với dung dịch ... Kết quả phản ứng tạo ra: ( 2a-b) mol RCO3 và (b-a) mol muối R(HCO3)2','Kiến Guru gửi đến các bạn Chuyên đề các phương trình hóa học lớp 11 chương Nitơ ... Nitơ thể hiện tính oxi hóa khi phản ứng với H2 và kim loại. ... một axit: làm quỳ tím hóa đỏ, tác dụng với bazơ, oxit bazơ, muối (đối với các hợp chất ... mức oxi hóa cao nhất như FeO, Fe(NO3)2 sẽ có phản ứng oxi hóa – khử với HNO3:.','https://drive.google.com/drive/folders/1Hm6ATU_WLkapwn7aYWIT-nlt-HNJcWse'),
('CHUYÊN ĐỀ 04 ( TỔNG ÔN 1) KIM LOẠI,OXIT TÁC DỤNG VỚI AXIT',4,3, 'https://hayhochoi.vn/uploads/news/2019_01/tinh-chat-hoa-hoc-cua-este-va-bai-tap-ve-este.jpg?1547805383362', 'Kim loại/Oxit kim loại tác dụng với Axit ôn THPT QG môn Hóa học có đáp án ... CHUYÊN ĐỀ KIM LOẠI/OXIT KIM LOẠI PHẢN ỨNG VỚI AXIT','Chuyên đề kim loại, oxit kim loại, bazơ, muối tác dụng với axit không có tính oxi hóa ... Ví dụ 1: Hòa tan hoàn toàn 2,76 gam hỗn hợp 2 kim loại Fe và Al vào dd HCl dư, sau ... A. 31,04 gam B. 38,48 gam C. 43,84 gam D. 46,16 gam ... Chuyên đề Kim loạiOxit kim loại tác dụng với Axit ôn thi THPT QG môn Hóa học có đáp án.', 'https://drive.google.com/drive/folders/1UaPNh2CBTXx0TAdIoG0m0BIUAQ-Bl1mO'),
('20 Bài HD Adobe Premiere CC [6 Tập] Share by TĐQ', 1, 4, 'https://i.ytimg.com/vi/tcj4AjQvh4M/maxresdefault.jpg','Xin chào các bạn!Hôm nay mình muốn chia sẻ với các bạn Video: Biên tập Video với Premiere Pro CC 2020 ',' Việc xuất ra một video hoàn chỉnh với Premiere Pro là một kỹ năng rất ... Để xuất một đoạn video trong Premiere Pro, hãy vào File > Export ... Sequence của chúng tôi là 1080p với tốc độ khung hình 29.97, vì vậy ... Hãy nhấp vào output name để xác định tên đầu ra cho tập tin video ... Bài viết cùng chủ đề.', 'https://drive.google.com/drive/folders/0Bwl2hpDfvDN1SUs5OVBCM1NBSW8'),
('Ghép ảnh người vào nền',1, 4, 'https://hieumobile.com/wp-content/uploads/optimized-wnyc.webp','Bài viết này mình sẽ hướng dẫn cho các bạn cách tách nền ảnh','Phần mềm cắt, ghép, chế ảnh đơn giản trên Android và iPhone ... Nhiều tính năng thú vị: Biến bản thân thành người cá, tạo hiệu ứng đi bộ trên nước. ... Sắp xếp và tổ chức ảnh vào nhiều khung khác nhau. ... Stickit dành cho Android là ứng dụng sử dụng miễn phí, giúp bạn cắt ảnh khỏi khung nền nhanh nhất, hiện đại nhất ...','https://drive.google.com/drive/folders/0Bwl2hpDfvDN1ckxONUdNRFk5aHM'),
('After Effect Cơ bản(1)',1, 4, 'https://service.keyframe.vn/uploads/filecloud/2018/February/26/30-119231519638412-1519638412.jpg','After Effect là một trong những phần mềm phổ biến nhất khi nói về đồ họa chuyển động (motion graphic)','Đến với khóa học cơ bản đến nâng cao Text Motion, bạn sẽ được cung cấp các kiến thức bài bản nhất về After Effect cũng như nắm được cách ...','https://drive.google.com/drive/folders/0Bwl2hpDfvDN1eW1QQk5fTFhNS0E'),
('50 Bài HD PTS', 1, 4,'https://i.ytimg.com/vi/OZKdkgwTGp8/maxresdefault.jpg', ' [DVD – 50 bài học Photoshop – Full HD]. – 50 bài học dạy Photoshop từ Cơ bản đến Trung cấp của Huy Training sẽ giúp bạn cải thiện trình độ', '50 bài học hiệu ứng hay nhất trong photoshop để có thể tạo ra những tác phẩm đặc sắc và ấn tượng. Những plug in phổ biến trong photoshop giúp làm việc ...', 'https://drive.google.com/drive/folders/0Bwl2hpDfvDN1OG42M1VIT2NOMUk'),
('Dựng video chuyên nghiệp với Adobe Premiere', 1, 4, 'https://arena.fpt.edu.vn/wp-content/uploads/2020/05/dung-phim-adobe-premiere-2.jpg', 'Tại sao nên học dựng phim bằng Adobe Premiere? — Premiere cho phép nhập, biên tập, xuất Video chất lượng cao','Adobe Premiere là một phần mềm chỉnh sửa video do Adobe System phát triển từ năm 1991. Adobe Premiere Pro được phát triển năm 2003 từ Adobe Premiere, nhằm hướng tới thị trường chỉnh sửa video chuyên nghiệp. Những hãng truyền thông lớn quốc tế đã sử dụng Adobe Premiere như: CNN, BBC…

Theo giới thiệu của hãng, Premiere Pro là phần mềm chỉnh sửa video hàng đầu trong ngành phim, truyền hình và website. Các công cụ sáng tạo được tích hợp trong phần mềm tạo ra sức mạnh giúp Editor thỏa sức sáng tạo. Với phiên bản Premiere Rush, người dùng có thể tạo và chỉnh sửa các dự án từ mọi thiết bị (PC, laptop, máy tính bảng và smartphone).

Phần mềm cũng được cải tiến theo từng năm nhằm giúp người dùng tiết kiệm thời gian. Họ chủ yếu tập trung vào câu chuyện sáng tạo của mình mà không cần những thao tác phức tạp như từng thấy trước đó.

Phần mềm này có thể xử lý cho bất kỳ hình ảnh nào’ bất kỳ hình dạng nào và trong bất kỳ nền tảng nào. Bạn có thể chỉnh sửa cảnh quay từ định dạng cổ xưa cho đến định dạng HD, full HD, 4K và thậm chí là 8K, thực tế ảo. những cải tiến của phần mềm gần đây cho phép Editor làm việc theo cách mà họ muốn, với phương tiện mà mình có, ngay cả trên thiết bị di động.

','https://drive.google.com/drive/folders/0Bwl2hpDfvDN1UTFjNG0zWDEzclE');



