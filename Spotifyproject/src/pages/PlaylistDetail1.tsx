import { IonPage, IonHeader, IonContent, IonGrid, IonRow, IonCol, IonButtons, IonBackButton, IonIcon, IonTitle, IonToolbar, IonImg, IonList, IonAvatar, IonItem } from '@ionic/react';
import { add, addOutline, ellipsisVerticalOutline } from 'ionicons/icons';
import React from'react';

const PlaylistDetail1:React.FC = () =>{
    const data = [
        {
          id:1,
          username:'abc',
          testimonial:'dwedo'
        },
        {
          id:2,
          username:'abc',
          testimonial:'dwedo'
        },
        {
          id:3,
          username:'abc',
          testimonial:'dwedo'
        },
        {
          id:4,
          username:'abc',
          testimonial:'dwedo'
        },
        {
          id:5,
          username:'abc',
          testimonial:'dwedo'
        },
        {
          id:6,
          username:'abc',
          testimonial:'dwedo'
        },
    ];
    return(
        <>
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot='start'>
                            <IonBackButton defaultHref='/YourLibrary' />
                        </IonButtons>
                        <IonTitle>
                            Playlist 1
                        </IonTitle>
                        <IonButtons slot='end'>
                            <IonIcon icon={add} size='large' />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className='ion-padding'>
                    <IonGrid>
                        <IonRow>
                            <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                                <IonGrid className='ion-no-padding'>
                                    <IonRow className="ion-text-center">
                                        <IonCol>
                                            <IonImg src='../public/favicon.png' />
                                            <br />
                                            <IonTitle>Playlist 1</IonTitle>
                                            <br />
                                            <IonList>
                                                {data.map((user) => (
                                                    <>
                                                        <IonItem>
                                                            <IonButtons slot='start'>
                                                                <IonAvatar>
                                                                    <IonImg src='../public/favicon.png' />
                                                                </IonAvatar>
                                                            </IonButtons>
                                                            <IonTitle>{user.username}</IonTitle>
                                                            <IonButtons slot='end'>
                                                                <IonIcon icon={ellipsisVerticalOutline} />
                                                            </IonButtons>
                                                        </IonItem>
                                                        <br />
                                                    </>
                                                ))}
                                            </IonList>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </IonPage>
        </>
    );
};
export default PlaylistDetail1;