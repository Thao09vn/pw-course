// Bài 2: Các thông số sức khỏe được tính như sau:

// Cân nặng lý tưởng = Số lẻ của chiều cao (tính bằng cm) x 9 rồi chia 10
// Mức cân tối đa = Bằng số lẻ của chiều cao (tính bằng cm)
// Mức cân tối thiểu = Số lẻ của chiều cao (tính bằng cm) x 8 rồi chia 10

// Phạm vi áp dụng: Công thức áp dụng cho 100 < chiều cao < 200

// Ví dụ: Nếu bạn cao 1,7m, tức 170cm thì :

// Cân cân nặng lý tưởng của bạn là: 70 x 9: 10 = 63 kg
// Cân nặng tối đa là: 70kg
// Cân nặng tối thiểu là: 70 x 8 :10 = 56 kg
// Yêu cầu: Tạo file ex2.js, thêm vào code đáp án cho đề bài sau:

// Khai báo chiều cao của bạn (cm)
// In ra cân nặng lý tưởng, cân nặng tối đa, cân nặng tối thiểu trên cùng một dòng.


const chieuCao = 165;
if (chieuCao>100 &&chieuCao < 200) {
    const sole=chieuCao-100;
    const canNangLyTuong=sole*9/10;
    const mucCanToida=sole;
    const mucCanToiThieu=sole*8/10;
    console.log("Cân nặng lý tưởng là:"+canNangLyTuong+ "   Cân nặng tối đa là:"+mucCanToida+ "     Cân nặng tối thiểu là:"+mucCanToiThieu);
}
else console.log("Chiều cao ngoài khoảng tham chiếu");