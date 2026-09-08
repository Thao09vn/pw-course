# Tổng hợp kiến thức buổi 2
## 1. Khởi tạo git: 
    Câu lệnh: `git init`
## 2. Thao tác với git
### 2.1. Khái niệm
    - **Vùng working directory:** vùng local làm việc của ngườisử dụng
    - Vùng staging: chứa các file code đã được add vào git. 
    - Vùng repository: chứa các file đã được commit
### 2.2  Các lệnh làm việc trong git
    - Đưa file từ working directory vào vùng staging:
        - Add 1 file: `git add tenfile`
        - Add tất cả: `git add .`
        - Add 1 file trong thư mục: `git add teenthumuc/tenfile`
    - Đưa file từ vùng staging vào repository
        - `git commit -m"chú thích"`
    - Kiểm tra trạng thái file đã được commit hay chưa
        - `git status`: check ở kết quả nếu file có màu xanh là file đã được comit lên vùng STG, nếu màu đỏ thì là chưa commit.
    - Kiểm tra danh sách lịch sử file đã commit từ vùng STG lên vùng repositoy
        - 'git log'
    - Cấu hình git: mục đích để biết thông tin người commit đó là ai
        - cấu hình mặc đinh `git config --global user.name "tên bạn" và `git config --global user.email "email"
        - cấu hình riêng cho 1 repo nếu ko muốn sử dụng thông tin mặc định: `git config user.name "tên bạn"  `git config user.email "email"
    - Git convention
        - Mục đích là đưa ra rule commit để khi xem lịch sử commit sẽ hiểu được nội dung commit đó làm cho việc gì
## 3. JavaScript
    - Ngôn ngữ: `NodeJs`
    - Tên file: `tenfile.js`
    - Cách run trên teminal: `node tenfile.js`
    - Câu lệnh để hiển thị kết quả: `console.log("XXX");`
    - Các comment 
        - `//` để comment 1 dòng 
        - `/*   */` để comment nhiều dòng
    - Khai báo biến với từ khóa `const` và `let`. `const` dùng cho trường hợp dữ liệu của biến đó không thay đổi, `let` dùng cho trường hợp giá trị có thay đổi. Dùng để khai báo có tất cả các loại dữ liệu.
    - Các kiểu dữ liệu: `number`, `String`, `boolean`, `undefined`,`null`,`symbol`,`bigint`, `object`
    - Các loại toán tử: `+`,`-`,`*`,`/`
    - Toán tử so sánh: 
        - So sánh bằng: 
            - Sử dụng `===`: a===b kiểu kiểm tra chặt chẽ cả về kiểu dữ liệu lẫn giá trị. Toàn bộ sử dụng kiểu này
            - Sử dụng `==`: a==b: kiểm tra ko chặt chẽ chỉ kiểm tra về giá trị. ko sử dụng kiểu này.
            - Chú ý 1 dấu bằng là phép gán ko phải phép so sánh.
        - So sánh khác: 
            - `!==` so sánh cả kiểu dữ liệu và giá trị
            - `!=` chỉ so sánh giá trị
    - Toán tử `AND` và `OR`: sử dụng khi có kết hợp nhiều điều kiện 1 lúc, kết quả trả về ở dạng `true/false`
    - Toán tử 1 ngôi `++x`tăng x lên 1 rồi gán lại cho x hoặc   `x++`: gán x=x trước rồi mới tăng sau.
    - câu điều kiện if: kiểm tra điều kiện nếu đúng thì chạy

## 4. JavaScript Convention
    - Quy tắc đặt tên theo quy định ở lớp học:
                      snake_case:tất cả viết thường, các từ cách nhau bởi dấu gạch dưới
                      kebad-case: đặt tên file,folder: tất cả viết thường, các từ cách nhau bởi dấu gạch ngang
                      camelCase: đặt tên biến, hàm: chữ đầu viết thường, các chữ sau của từ thứ 2 thì viết hoa chũ đầu tiên phuongThao
                      PascalCase: đặt tên class: tất cả chữ cái đầu của từ viết hoa PhuongThao
                      upperCase: tất cả viết hoa, các từ cách nhau dấu gạch dưới
                            