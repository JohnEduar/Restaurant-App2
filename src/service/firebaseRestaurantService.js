import { collection, getDocs, doc, getDoc, addDoc, updateDoc, deleteDoc, query, orderBy, writeBatch } from 'firebase/firestore';
import { db } from '../firebase/config';

const COLLECTION_NAME = 'restaurants';

//Obtener todos los restaurantes
export const getRestaurants = async () => {
    try {
        const restaurantsCollection = collection(db, COLLECTION_NAME);
        const q = query(restaurantsCollection, orderBy('name'));
        const snapshot = await getDocs(q);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (error) {
        console.error('Error al obtener restaurantes:', error);
        throw error;
    }
};

export const getRestaurantById = async (id) => {
    try {
        const restaurantDoc = doc(db, COLLECTION_NAME, id);
        const snapshot = await getDoc(restaurantDoc);
        if (snapshot.exists()) {
            return { id: snapshot.id, ...snapshot.data() };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error al buscar restaurante por ID:', error);
        throw error;
    }
};

export const getRestaurantsByName = async (name) => {
    try {
        const restaurants = await getRestaurants();
        if (!name) {
            return restaurants;
        }
        return restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(name.toLowerCase())
        );
    } catch (error) {
        console.error('Error al buscar restaurantes por nombre:', error);
        throw error;
    }
};

export const createRestaurant = async (data) => {
    try {
        console.log('Datos recibidos en createRestaurant:', data); // Para depuración
        const newRestaurant = {
            ...data,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };
        const restaurantRef = await addDoc(collection(db, COLLECTION_NAME), newRestaurant);
        return { id: restaurantRef.id, ...newRestaurant };
    } catch (error) {
        console.error('Error al crear restaurante:', error);
        throw error;
    }
};

export const updateRestaurant = async (id, data) => {
    try {
        const restaurantDoc = doc(db, COLLECTION_NAME, id);
        const restaurantData = {
            ...data,
            updatedAt: new Date().toISOString(),
        };
        await updateDoc(restaurantDoc, restaurantData);
        return await getRestaurantById(id);
    } catch (error) {
        console.error('Error al actualizar restaurante:', error);
        throw error;
    }
};

export const deleteRestaurant = async (id) => {
    try {
        const restaurantDoc = doc(db, COLLECTION_NAME, id);
        await deleteDoc(restaurantDoc);
        return true;
    } catch (error) {
        console.error('Error al eliminar restaurante:', error);
        throw error;
    }
};

export const initilizeRestaurants = async () => {
    try {
        const initialRestaurants = restaurantesQuemados();
        const existingSnapshot = await getDocs(collection(db, COLLECTION_NAME));
        const existingNames = existingSnapshot.docs.map(doc => doc.data().name);

        const batch = writeBatch(db);
        initialRestaurants.forEach(restaurant => {
            if (!existingNames.includes(restaurant.name)) {
                const restaurantRef = doc(collection(db, COLLECTION_NAME));
                batch.set(restaurantRef, restaurant);
            }
        });
        await batch.commit();
        console.log('Restaurantes inicializados correctamente');
    } catch (error) {
        console.error('Error al inicializar restaurantes:', error);
        throw error;
    }
};

const restaurantesQuemados = () => [
    {
        name: 'La Cumbre del Sabor',
        description: 'Un restaurante de cocina internacional que combina lo mejor de la gastronomía europea y asiática en un ambiente elegante con vistas panorámicas',
        image: 'https://images.unsplash.com/photo-1552566626-2d907dab0dff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Calle 123, Bogotá',
        phone: '+57 300 1234567',
        hours: 'Lunes a Domingo: 12pm - 11pm',
    },
    {
        name: 'La Casa Gourmet',
        description: 'Experiencia gastronómica con platos internacionales. Ambiente acogedor y elegante, ideal para cenas románticas o celebraciones especiales',
        image: 'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Carrera 45, Medellín',
        phone: '+57 300 7654321',
        hours: 'Martes a Domingo: 1pm - 10pm',
    },
    {
        name: 'El Refugio del Valle',
        description: 'Ofrece platos tradicionales de la cocina colombiana, con ingredientes frescos de la región, en un entorno acogedor y rústico rodeado de naturaleza',
        image: 'https://images.unsplash.com/photo-1567745219000-b99afacf5ef6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        address: 'Avenida 10, Cali',
        phone: '+57 300 9876543',
        hours: 'Miércoles a Lunes: 11am - 9pm',
    },
];