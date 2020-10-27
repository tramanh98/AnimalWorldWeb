
import React from "react";
import '../style.css';
import 
{
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Badge,
  Button
} from "shards-react";

export const Home = () => {
    return(
        <BlogPosts></BlogPosts>
    );
}


/* eslint jsx-a11y/anchor-is-valid: 0 */


class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // First list of posts.
      PostsListOne: [
        {
          backgroundImage:("../images/content-management/1.jpeg"),
          category: "Chim",
          categoryTheme: "dark",
          author: "Anna Kunis",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "Chim Cánh Cụt Hoàng Đế – Vị Thế Của Kẻ Lớn Nhất Trong Họ Chim Cánh Cụt",
          body:
            "Chúng là loài lớn nhất trong họ nhà Chim Cánh Cụt trong thế giới động vật. Thường sống ở vùng Châu Nam Cực. Nơi có băng tuyết quanh năm. Hình dáng của loài chim không bao giờ bay này đặc trưng bởi chân màu trắng phần kéo dài từ ngực tới tai có màu vàng nhạt tới vàng tươi. Trong khi đó đầu có màu đen, chi trước nhỏ và dẹt...",
          date: "28 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/2.jpeg"),
          category: "Bò Sát",
          categoryTheme: "info",
          author: "James Jamerson",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Những hiểu lầm thường gặp về loài rắn",
          body:
            "NHỮNG HỈU LẦM VỀ LOÀI RẮN: Ở Việt Nam, số loài trong họ Rắn lục có màu lục còn ít hơn cả mấy đứa họ Rắn nước Colubridae. Cách phân biệt dễ nhất giữa rắn nước có màu lục và rắn lục thật sự là dựa vào cái đầu chứ ko phải màu sắc, đầu rắn lục thường có hình tam giác và có thể có 2 lỗ nằm gần 2 lỗ mũi, đó là hố nhiệt, giúp rắn thấy được bức xạ nhiệt như camera hồng ngoại…",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/3.jpeg"),
          category: "Có vú",
          categoryTheme: "royal-blue",
          author: "Anhtu2117",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Loài động vật nào là bậc thầy về săn mồi đơn độc trong thế giới tự nhiên?",
          body:
            "Chúng là Mèo chân đen, theo như thống kê nghiên cứu thì tỷ lệ thành công của chúng đạt đến 60% khi săn mồi. Để công bằng hơn thì bạn sẽ không thể thấy bất kì số liệu nào cao hơn ở các loài báo đốm, báo hoa hay sư tử…. Báo tỷ lệ (14 – 38%), sư tử (khoảng 20% vào một ngày may mắn, 30% cho một nhóm), gấu bắc cực (10%) và hổ ( có lúc thấp tới 5%)...",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/4.jpg"),
          category: "Côn trùng",
          categoryTheme: "warning",
          author: "PhuongVi",
          authorAvatar: require("../images/avatars/3.jpg"),
          title: "10 Loài Côn Trùng Nguy Hiểm Nhất Thế Giới",
          body:
            "Côn trùng không phải là loài động vật to lớn nhất nhưng chúng lại là một trong những loài nguy hiểm nhất trên thế giới. Điều bất ngờ là chỉ bằng một vết cắn cực nhỏ của côn trùng nguy hiểm cũng đủ để kết liễu cuộc đời bạn chứ không phải những đòn tấn công mạnh mẽ.  Côn trùng luôn đóng một vai trò nhất định trong lịch sử và có mặt cả trong những bước tiến của y học thế giới....",
          date: "29 February 2019"
        }
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: require("../images/content-management/5.jpg"),
          category: "Động vật quý hiếm",
          categoryTheme: "info",
          author: " Anhtu2117",
          authorAvatar: require("../images/avatars/0.jpg"),
          title:
            "25 loài động vật đã bị tuyệt chủng sẽ làm bạn tiếc nuối",
          body:
            "Ngày nay, khi đối mặt với quá nhiều vấn đề nghiêm trọng như quá tải, ô nhiễm, thay đổi khí hậu… thì việc biến mất của một vài loài động vật ngày càng trở nên nghiêm trọng hơn. Rất khó để biết chính xác khi một loài động vật nào đó biến mất trong thiên nhiên hoang dã, nhưng có thể nói rằng có hàng ngàn loài động vật đang đối mặt với tuyệt chủng mỗi năm....",
          date: "29 February 2019"
        },
        {
          backgroundImage: require("../images/content-management/6.jpg"),
          category: "Động vật hoang dã",
          categoryTheme: "dark",
          author: "Anh Nguyen",
          authorAvatar: require("../images/avatars/1.jpg"),
          title:
            "Những con vật sẽ thấy gì khi nhìn thấy những chiếc xe ô tô với đầy người ở trên đó?",
          body:
            "Các loài động vật ăn thịt thường tập trung nhiều vào theo dõi chuyển động hơn là chi tiết về con mồi của nó (đó là một thực tế khoa học). Do đó, khi chúng nhìn thấy một chiếc xe safari với đầy người bên trong thì tất cả những gì chúng hiểu là: Đây là một con thú lớn với rất nhiều bộ phận, giống như 1 con nhện có nhiều mắt, hay một con bạch tuộc có nhiều xúc tu vậy...",
          date: "29 February 2019"
        }
      ],

      // Third list of posts.
      PostsListThree: [
        {
          author: "Phuong Vi",
          authorAvatar: require("../images/avatars/1.jpg"),
          title: "LIỆU CHÚNG TA CÓ THỂ CỨU NHỮNG ĐÀN VOI CUỐI CÙNG CỦA TRÁI ĐẤT!",
          body:
            "Voi là một loài động vật thông minh và giàu cảm xúc. Chúng có hành vi và khả năng biểu cảm gần giống con người nhất. Chúng có tập tính xã hội cao – gắn kết sâu sắc, thân tình với đồng loại. ...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/2.jpg"),
          title: "Ăn thịt đồng loại ở Động Vật – Man rợ mà phổ biến",
          body:
            "Bạn từng khiếp sợ trước Hannibal – kẻ ăn thịt người điên loạn từng khuấy đảo trong giới tiểu thuyết một thời? Bạn tin rằng, việc ăn thịt đồng loại dã man ấy là không có thật và chỉ tồn tại trên những trang sách?...",
          date: "29 February 2019"
        },
        {
          author: "John James",
          authorAvatar: require("../images/avatars/3.jpg"),
          title:
            "Ốc sên làm thế nào để giữ chiếc vỏ to đùng trên lưng?",
          body:
            "Trong suốt vòng đời của ốc sên, nó sẽ phát triển các mô mềm dần dần trở nên cứng hơn và phát triển chiếc vỏ của mình. Vỏ của ốc sên phát triển theo thời gian cũng giống như quá trình phát triển xương ở con người chúng ta vậy....",
          date: "29 February 2019"
        }
      ],

      // Fourth list of posts.
      
    };
  }

  render() {
    const {
      PostsListOne,
      PostsListTwo,
      PostsListThree,
      PostsListFour
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        

        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="3" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by {post.author}
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Second Row of Posts */}
        <Row>
          {PostsListTwo.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by Anna Ken
                    </a>
                  </div>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Third Row of Posts */}
        <Row>
          {PostsListThree.map((post, idx) => (
            <Col lg="4" key={idx}>
              <Card small className="card-post mb-4">
                <CardBody>
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text text-muted">{post.body}</p>
                </CardBody>
                <CardFooter className="border-top d-flex">
                  <div className="card-post__author d-flex">
                    <a
                      href="#"
                      className="card-post__author-avatar card-post__author-avatar--small"
                      style={{ backgroundImage: `url('${post.authorAvatar}')` }}
                    >
                      Written by James Khan
                    </a>
                    <div className="d-flex flex-column justify-content-center ml-3">
                      <span className="card-post__author-name">
                        {post.author}
                      </span>
                      <small className="text-muted">{post.date}</small>
                    </div>
                  </div>
                  <div className="my-auto ml-auto">
                    <Button size="sm" theme="white">
                      <i className="far fa-bookmark mr-1" /> Bookmark
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>

       
      </Container>
    );
  }
}

export default BlogPosts;



