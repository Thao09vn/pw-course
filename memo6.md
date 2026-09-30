## Tổng hợp kiến thức bài 6
### 1. Git: remote (repo)
        **Remote:** (repo) là danh sách các repository được lưu trữ ở máy chủ cho phép bạn hoặc người khác truy cập vào để cùng đóng góp tài nguyên. Mỗi remote được định danh bằng 1 tên ngắn gọn và 1 liên kết Url
            - Ví dụ: origin git@github.com:Thao09vn/demo-1.git
                - Tên ngắn gọn: origin
                - URL: git@github.com:Thao09vn/demo-1.git
        **Thao tác với remote:**
            - Thêm mới 1 remote( tạo mới 1 repo): git remote add <tên remote> <url>
            - Xem tất cả các remote hiện có: git remote -v
            - Xóa remote: git remote remove <tên remote>
### 2. Git clone,pull,push
        **clone:** lấy toàn bộ source của repo về (có thể hiểu là mode insert)
            - git clone git@github.com:Thao09vn/demo-1.git (chọn ở mode SSH) 
            - đổi tên mới của repo mà ko dùng tên trên git: git clone git@github.com:Thao09vn/demo-1.git teenmoi.
        **push** đẩy source lên 1 nhánh của repo trên github: git push origin main
        **pull** pull code về (sau khi đã thực hiện lệnh clone, có thể hiểu là mode update) :git pull origin main
### 3. Git ignore file
        **.gitignore** file liệt kê các file, thư mục mà ko cần git kiểm soát( chỉ càn liệt kê tên file, tên thư mục là được, màu của các file này sau khi setting sẽ tự động mờ đi)
### 4. Git branch
        **Kiểm tra danh sách nhanh đang có:** git branch
        **Tạo nhánh mới:** git branch tên nhánh ( phải tạo nhánh từ nhánh main)
        ** chuyển sang làm việc tại nhánh mới tạo:** git checkout tên nhánh
        ** vừa tạo nhánh mới vừa chuyển sang làm việc tại nhánh mới** git checkout -b thao2
        

