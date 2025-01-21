import styled from "styled-components";
import SectionTitle from "../../../components/common/SectionTitle";

const Container = styled.div`
  padding: 0 10rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Card = styled.div`
  width: calc(33.3% - 1.5rem);
  padding: 1rem;
  .info {
    .title {
      font-size: 2rem;
    }
    .description {
      font-size: 0.8rem;
    }
  }
  .ratings {
    display: flex;
    gap: 0.5rem;
    .star {
      svg {
        width: 1.2rem;
      }
    }
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 13rem;
  overflow: hidden;
  img {
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const cardsData = [
  {
    title: "A real sense of community, nurtured",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I ...",
    url: "",
    ratings: 3,
    mediaName: "Olga",
    mediaDescription: "Weave Studios – Kai Tak",
    brandName: "Google",
    brandLogo: "",
    mediaImage:
      "https://images.unsplash.com/photo-1636777299552-4fbb482b9267?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "A real sense of community, nurtured",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I ...",
    url: "",
    ratings: 3,
    mediaName: "Olga",
    mediaDescription: "Weave Studios – Kai Tak",
    brandName: "Google",
    brandLogo: "",
    mediaImage:
      "https://images.unsplash.com/photo-1551383616-a9e150c07fca?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "A real sense of community, nurtured",
    description:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I ...",
    url: "",
    ratings: 3,
    mediaName: "Olga",
    mediaDescription: "Weave Studios – Kai Tak",
    brandName: "Google",
    brandLogo: "",
    mediaImage:
      "https://images.unsplash.com/photo-1551383616-a9e150c07fca?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function MediaMentions() {
  return (
    <Container>
      <SectionTitle title="Media mentions and highlights" />
      <CardsWrapper>
        {cardsData.map((item, index) => (
          <Card key={index}>
            <div className="info">
              <h2 className="title">{item.title}</h2>
              <p className="description">{item.description}</p>
            </div>
            <div className="btn_wrapper">
              <a className="btn" href={item.url}>
                Read More
              </a>
            </div>
            <div className="ratings">
              <div className="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    style={{ fill: "#ED8A19" }}
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <div className="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    style={{ fill: "#ED8A19" }}
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <div className="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    style={{ fill: "#ED8A19" }}
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
              <div className="star">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Capa_1"
                  viewBox="0 0 47.94 47.94"
                >
                  <path
                    style={{ fill: "#ED8A19" }}
                    d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757  c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042  c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685  c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528  c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956  C22.602,0.567,25.338,0.567,26.285,2.486z"
                  />
                </svg>
              </div>
            </div>

            <div className="media_info">
              <div className="media_title">{item.mediaName}</div>
              <div className="media_description">{item.description}</div>
            </div>

            <div className="brand_info">
              <div className="brand_logo">
                <img src={item.brandLogo} alt="" />
              </div>
              <div className="brand_name">{item.brandName}</div>
            </div>

            <ImageWrapper>
              <img src={item.mediaImage} alt="" />
            </ImageWrapper>
          </Card>
        ))}
      </CardsWrapper>
    </Container>
  );
}
