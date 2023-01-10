const update = [
    {
        versionName: "v1.0.x",
        details: [
            {
                id: 'version10',
                version: 'v1.0.0',
                description: 'Phiên bản đầu tiên của game'
            },
            {
                id: 'version101',
                version: 'v1.0.1',
                description: 'Window: Sửa lỗi không thoát được cài đặt và lưu game',
            },
            {
                id: 'version102',
                version: 'v1.0.2',
                description: 
                `Sửa lỗi nhiệm vụ phụ không reset tiến trình<br>
                Mở khu vực ra khỏi làng (nơi bị tường chặn)`
            },
            {
                id: 'version103',
                version: 'v1.0.3',
                description: 
                `Sửa lỗi chính tả trong game<br>
                Sửa lỗi sự kiện phá vỡ pha lê<br>
                Sửa lỗi skill lv5 Valha không có mô tả<br>
                Sửa lỗi Kora lên lv5 không nhận skill mới<br>
                Sửa 1 số lỗi đồ họa<br>
                Thêm phần mở màn và thông tin phiên bản`
            },
            {
                id: 'version104',
                version: 'v1.0.4',
                description: 
                `Sửa lỗi sự kiện pha lê<br>
                Sửa lỗi tỷ lệ drop vật phẩm là 100%<br>
                Thử nghiệm: Android nút quay lại sẽ mở menu game`
            }
        ],
        imageURL: "./img/background.png",
    },

    {
        versionName: "v1.1.x",
        details: [
            {
                id: 'version11',
                version: 'v1.1',
                description: 
                `Thêm vũ khí,giáp,vật phẩm,kỹ năng mới<br>
                Xóa bỏ các hiệu ứng đặc biệt trên vũ khí,giáp<br>
                Cập nhật cốt truyện mới<br>
                Nhân vật mới<br>
                Kẻ thủ mới<br>
                Thêm nút thoát trong game và cả ngoài game<br>
                Sửa lỗi: Sự kiện Valha biến mất khi vào inn lần đầu chơi game`
            },
            {
                id: 'version111',
                version: 'v1.1.1',
                description: 
                `Sửa 1 số lỗi chính tả<br>
                Xóa bỏ các viên đá ở khu vực dịch chuyển từ hang tới chợ đen<br>
                Sửa lỗi Inn ở khu làng 2 di chuyển về làng khởi đầu<br>
                Sửa lỗi shop bán Item làng 2 không vào được<br>
                Sửa 1 số lỗi liên quan đến vật phẩm<br>
                Thông báo: Hiện tại bản 1.1.1 đang có sự cố với Android nên tạm thời chỉ có bản cho window`
            },
            {
                id: 'version112',
                version: 'v1.1.2',
                description: 
                `Sửa 1 số lỗi chính tả<br>
                Sửa lỗi trong quá trình giải cứu người chơi rời khỏi khu vực<br>
                Sửa lỗi hang động không xuất hiện kẻ thù<br> Nerf Boss Warrior`
            }
        ],
        imageURL: "./img/CrystalGem v1.1 update.png"
    },

    {
        versionName: "v1.2.x",
        details: [

            {
                id: 'version12',
                version: 'v1.2',
                description: 
                `Cập nhật cốt truyện tiếp theo<br>
                Kẻ thù mới<br>
                Vũ khí,giáp mới<br>
                Kỹ năng mới<br>
                Sửa lỗi người chơi không vào được nhiệm vụ phụ làng 2<br>
                Xóa bỏ mô tả cho vũ khí và giáp (trừ khi có hiệu ứng đặc biệt)`
            },
            {
                id: 'version121',
                version: 'v1.2.1',
                description: 
                `Sửa 1 số lỗi chính tả (luôn luôn có lỗi đoạn này)<br>
                Sửa 1 số lỗi đồ họa<br>
                Thay đổi 1 số đồ họa để tránh hiểu nhầm`
            },
            {
                id: 'version122',
                version: 'v1.2.2',
                description: 
                `Sửa 1 số lỗi chính tả (luôn luôn có lỗi đoạn này)<br>
                Sửa lỗi đồ họa<br>
                Sửa lỗi Theri(MultiShot) không cộng tp<br>
                Mundo(DoomsDay) sẽ hiển thị rõ khi sử dụng<br>
                Cải thiện EXP khi đánh quái,nhiệm vụ chính,nhiệm vụ phụ<br>
                Thử nghiệm: Khi nhận nhiệm vụ phụ mỗi khi tiêu diệt 1 đối thủ sẽ tính điểm luôn`
            }
        ],
        imageURL: "./img/CrystalGem v1.2 update.png"
    },

    {
        versionName: "v1.3.x",
        details: [
            {
                id: 'version13',
                version: 'v1.3',
                description: 
                `Cốt truyện mới<br>
                Vật phẩm mới<br>
                Kẻ thù mới<br>
                Nhân vật mới<br>
                Thế giới mới!<br>
                Thêm 1 sự kiện đặc biệt ở thế giới chính<br>
                Sửa lỗi nhiệm vụ phụ Scorpion vẫn được + điểm khi đấu với những kẻ thù khác scorpion<br>
                Sửa lỗi nhiệm vụ phụ Scorpion khi hoàn thành không xóa vật phẩm<br>
                Valha (Fire) Giảm sức tấn công của đối thủ trong 3 lượt -> 2 lượt<br>
                Theri (Ice) Đóng băng đối thủ với 50% cơ hội -> 30% cơ hội<br>
                Kora (Dancing Crititcal) gây độc với 5% cơ hội -> 10% cơ hội<br>
                Theri (FrozenArea) Đóng băng với 100% cơ hội -> 60% cơ hội<br>
                Valha (Recovery) Cải thiện khả năng hồi phục<br>
                Kora (LoveRefuse) Thôi miên với 60% cơ hội -> 40% cơ hội<br>
                Sửa lỗi chưa xong nhiệm vụ giải cứu Theri vẫn vào được khu tháp nước<br>
                Nhiệm vụ phụ sẽ tính điểm luôn khi từng đối thủ bị hạ (Thử nghiệm)<br>
                Nút tiếp tục(Load game) sẽ có thể sử dụng khi dừng game (Thử nghiệm)`
            },
            {
                id: 'version131',
                version: 'v1.3.1',
                description: 
                `Sửa lỗi đánh bại Waldron không tiếp tục cốt truyện tiếp theo`
            },
            {
                id: 'version132',
                version: 'v1.3.2',
                description: 
                `Sửa lỗi sự kiện Gelena không tự động chạy`
            },
            {
                id: 'version133',
                version: 'v1.3.3',
                description: 
                `Sửa lỗi sau sự kiện Gelena nhận vật tàng hình<br>
                Sửa lỗi chính tả<br>
                Sửa lỗi sau sự kiện Gelena đội chỉ còn 1 nhân vật<br>
                Chỉnh sửa 1 số đồ họa`
            },
            {
                id: 'version134',
                version: 'v1.3.4',
                description: 
                `Sửa 1 số lỗi đồ họa<br>
                Sửa lỗi dịch chuyển sai địa điểm<br>
                Sửa lỗi chính tả<br>
                Sửa lỗi không ra được khỏi làng ở sa mạc<br>
                Sửa lỗi sự kiện tìm thấy Valha làm nhân vật biến mất khi nói chuyện<br>
                Sự kiện đặc biệt (Willowisp) giảm từ 1000 EXP/Gem -> 500 EXP/Gem<br>
                Thử nghiệm: Waldron(Protect) Đưa đồng minh vào trạng thái bất tử bằng cách né đòn tấn công<br>
                Làm lại mô tả M.tấn công, M.phòng thủ, Vật phẩm N.V`
            },
            {
                id: 'version135',
                version: 'v1.3.5',
                description: 
                `Sửa 1 số lỗi chính tả<br>
                Sửa lỗi không ra khỏi hang động băng được`
            }
        ],
        imageURL:  "./img/CrystalGem v1.3 update.png"
    },

    {
        versionName: 'v1.4.x',
        details: [
            {
                id: 'verrsion14',
                version: 'v1.4',
                description: 
                `Sửa lỗi bị chặn ở khu vực mới<br>
                Cốt truyện mới<br>
                Thay đổi hình dáng của nhân vật Gelena<br>
                Đổi tên Warrior -> Kudo<br> Waldron(Protect) đưa 1 đồng minh vào trạng thái bất tử -> tăng khả năng phòng thủ cho tất cả đồng minh trong 5 lượt<br>
                Thêm link đi tới trang web ngay ngoài nền game<br>
                Thay đổi toàn bộ cơ chế chiến đấu trong game<br>
                Thay đổi giao diện lưu/tải game<br>
                Cải thiện hoạt ảnh của kẻ thù<br>
                Thay đổi giao diện`
            },
            {
                id: 'version141',
                version: 'v1.4.1',
                description: 
                `Thêm chức năng đồng bộ hóa FPS<br>
                Thêm chức năng hoạt ảnh động<br>
                Thêm nút di chuyển cho điện thoại`
            }
        ],
        imageURL: "./img/CrystalGem v1.4 update.png"
    },

    {
        versionName: "v1.5.x",
        details: [
            {
                id: 'version15',
                version: 'v1.5',
                description: 
                `Cốt truyện mới<br>
                Sửa lỗi nút trên điện thoại di chuyển không mượt<br>
                Giờ skill sẽ có hồi chiêu và hiển thị rõ hơn<br>
                Nerf PoweredThrust (Waldron)<br>
                Protect (Waldron) Thêm hồi HP<br>
                Gỡ bỏ cài đặt fps/ảnh động<br>
                Chỉnh sửa sát thương của Theri giờ sẽ dựa vào tốc độ<br>
                Nerf RunaShot (Theri)<br>
                Nerf Multishot (Theri)<br>
                Nerf ArrowRain (Theri)`
            },
            {
                id: 'version151',
                version: 'v1.5.1',
                description: 
                `Đưa nhân vật nhiệm vụ (Bọ cạp) sang map để người chơi có thể kiếm thêm exp<br>
                thay đổi ảnh title,loading...,game over<br>
                Thử nghiệm: Tối ưu hóa trên điện thoại<br>
                Thử nghiệm: Window giờ sẽ lưu dữ liệu ở Users/%User%/%APPDATA%/Local/CrystalGem<br>
                Thử nghiệm: Bộ cài ứng dụng trên window<br>
                Gỡ bỏ nút thoát game trên điện thoại<br>
                Thay đổi giao diện<br>
                Android giờ chỉ có thể cài game từ android 6+`
            }
        ],
        imageURL: "./img/CrystalGem v1.5 update.png"
    },

    {
        versionName: "v1.6.x",
        details: [
            {
                id: 'version16',
                version: 'v1.6',
                description: 
                `Cập nhật cốt truyện cuối cùng game tới hồi kết<br>
                Waldron(Protect): Tăng khả năng phòng thủ của tất cả đồng minh trong 5 lượt và hồi 20% HP -> Tăng khả năng phòng thủ của tất cả đồng minh trong 3 lượt và gỡ bỏ tất cả hiệu ứng có hại<br>
                Waldron(Protect): Chuyển thành kỹ năng "Đặc biệt"<br>
                Waldron(Provoke): Chuyển thành kỹ năng "Phép thuật"<br>
                Sửa lỗi trạng thái đóng băng không bao giờ kết thúc<br>
                Valha(FireReduce): Tấn công đối thủ và hồi phục HP,sát thương gây ra tương đương MP hiện có,gỡ bỏ hiệu ứng tăng sát thương của đối thủ. -> Tấn công đối thủ và hồi phục HP,sát thương gây ra tương đương MP hiện có,gỡ bỏ mọi hiệu ứng có lợi của đối thủ.<br>
                Kora(FullCounter): Tối ưu hóa chiêu thức`
            },
            {
                id: 'version161',
                version: 'v1.6.1',
                description: 
                `Cập nhật chế độ chơi nhiều người chơi mới`
            },
            {
                id: 'version162',
                version: 'v1.6.2',
                description: 
                `Sửa lỗi server không hoạt động<br>
                Thêm cài đặt đồng bộ hóa FPS khuyên bật khi muốn chơi game trên 60 fps<br>
                Thêm cài đặt hoạt ảnh động<br>
                Gỡ bỏ nút "Trang chủ" trong game<br>
                Thêm chức năng load trước để mượt game hơn<br>
                Sửa lỗi mất nút "Thoát game" trên máy tính<br>
                Xóa bỏ 1 số file không dùng<br>
                Thêm chế độ tự động lưu game (Để chức năng này hoạt động bạn cần phải lưu game 1 lần)`
            },
            {
                id: 'version163',
                version: 'v1.6.3',
                description: 
                `Sửa lỗi chơi online trên android (Do thiếu quyền)<br>
                Giờ người chơi sẽ được tự chọn cộng chỉ số nào mỗi khi lên cấp<br>
                Thêm hiệu ứng animation ngoài màn hình khi bắt đầu vào chơi<br>
                thêm trỏ chuột ở mỗi nơi người chơi chọn chức năng trong game`
            }
        ],
        imageURL: "./img/CrystalGem v1.6 update.png"
    },
    {
        versionName: 'v1.7.x',
        details: [
            {
                id: 'version170',
                version: 'v1.7.0',
                description: 
                `Hoàn chỉnh chế độ đa người chơi<br>
                Giảm hiệu ứng ảnh động ở phần title game<br>
                Thay đổi lại cơ chế tự cộng điểm nâng cấp nhân vật<br>
                Thay đổi giao diện cài đặt<br>
                Thêm 1 vài cài đặt mới (Tua nhanh cốt truyện, hiệu ứng trong chiến đấu)<br>
                Giờ bạn có thể tua nhanh cốt truyện bắn cách giữ shift<br>
                Thêm trỏ chuột vào đối thủ và đồng minh<br>
                Thêm nút mạng xã hội cho discord<br>
                Thêm lại bộ cài game cho PC<br>`
            },
            {
                id: 'version171',
                version: 'v1.7.1',
                description: 
                `Sửa lỗi không thể tham gia chơi trực tuyến`
            },
            {
                id: 'version172',
                version: 'v1.7.2',
                description: 
                `Sửa lỗi khi tham gia trò chơi với 4 nhân vật chính<br>
                Sửa lỗi tải lại Cursor2<br>
                Sửa lỗi nhiệm vụ sau trận chiến đầu với Mundo không chạy<br>`
            },
            {
                id: 'version173',
                version: 'v1.7.3',
                description: 
                `Sửa lỗi không thể bắt đầu nhiệm vụ Gelena`
            }
        ],
        imageURL: "./img/CrystalGem v1.7 update.png"
    },
    {
        versionName: 'v1.8.x',
        details: [
            {
                id: 'version180',
                version: 'v1.8.0',
                description: 
                `Sửa lỗi không thể bắt đầu nhiệm vụ Era<br>
                Tối ưu hóa bắt sự kiện<br>
                Tối ưu hóa menu giờ chỉ cần 1 lần ấn<br>
                Thêm phần hướng dẫn cho người mới chơi<br>`
            }
        ],
        imageURL: "./img/CrystalGem v1.8 update.png"
    }
]