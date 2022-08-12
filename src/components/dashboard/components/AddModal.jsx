import { motion } from "framer-motion";
import { useState } from "react";

import { FaTimes } from "react-icons/fa";

import { UploadImages } from "../../../utils/firebase";
import { addDocs } from "../../../utils/firebase";
import toast from "react-hot-toast";

export const AddModal = ({ toggle }) => {
  const [create, setCreate] = useState({
    title: "",
    category: "",
    images: null,
    mainImage: null,
    involved: "",
    description: "",
    articleContent: "",
    date: "",
    state: 'Pendiente'
  });
  const [images, setImages] = useState([])
  const [mainImage, setMainImage] = useState([])

  const handleSubmit = async () => {

    if (
      create.title === "" ||
      create.category === "" ||
      create.involved === "" ||
      create.description === "" ||
      create.articleContent === "" ||
      images.length === 0 ||
      mainImage.length === 0 ||
      create.date === "") return toast.error("Llena el formulario!"); toggle()

    create.images = images
    create.mainImage = mainImage[0]
    await addDocs("articles", create);
    toggle()

  }

  const saveImages = async (files, main) => {
    console.log('files, main', files, main)
    if (!main && !create.images) {
      toast.error("Selecciona las imagenes!")
      toggle()
      return
    }
    if (main && !create.mainImage) {
      toast.error("Selecciona las imagenes!")
      toggle()
      return
    }

    if (!main) {
      const arrayImages = toast.promise(UploadImages("articleImages", files),
        {
          loading: "Guardando...",
          success: "¡Imagenes guardadas!",
          error: "¡Algo salió mal!",
        }
      );
      setImages(await arrayImages)
    } else {
      const arrayImages = toast.promise(UploadImages("articleImages", files),
        {
          loading: "Guardando...",
          success: "¡Imagenes guardadas!",
          error: "¡Algo salió mal!",
        }
      );
      setMainImage(await arrayImages)
    }
  }

  return (
    <div className="min-h-[calc(100vh-56px)] bg-neutral-800/50 w-screen absolute flex items-center justify-center z-10">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-h-96 md:max-h-[450px] lg:max-h-[700px] overflow-auto w-[340px] md:w-[540px] lg:w-[720px] bg-white flex flex-col items-start justify-between py-4 px-6 rounded-lg "
      >
        <div className="flex items-center justify-between w-full mb-4">
          <h1 className="text-xl font-bold">Crear artículo</h1>
          <button onClick={toggle}>
            <FaTimes />
          </button>
        </div>

        <div className="w-full flex flex-col">
          <div className="flex flex-col md:flex-row md:mx-auto mb-4 w-full md:justify-around">
            <div className="flex flex-col">
              <label
                htmlFor="titulo"
                className="text-green-500 font-bold text-md"
              >
                Título
              </label>
              <input
                type="text"
                value={create.title}
                onChange={(e) =>
                  setCreate({ ...create, title: e.target.value })
                }
                className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="categoria"
                className="text-green-500 font-bold text-md"
              >
                Categoría
              </label>
              <input
                type="text"
                value={create.category}
                onChange={(e) =>
                  setCreate({ ...create, category: e.target.value })
                }
                className="border-[1px] rounded-md px-2 py-1 border-neutral-400"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:mx-auto mb-4 w-full md:justify-around">
            <div className="flex flex-col">
              <label
                htmlFor="seleccion de imagenes"
                className="text-green-500 font-bold text-md"
              >
                Selección de imágenes
              </label>
              <div className="flex flex-col">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  // value={create.images}
                  onChange={(e) =>
                    setCreate({ ...create, images: e.target.files })
                  }
                  className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400 md:w-[196px]"
                />
                <button
                  type="button"
                  onClick={() => saveImages(create.images, false)}
                  className="bg-blue-500 mt-2 py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right"
                >
                  Subir
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="imagen principal"
                className="text-green-500 font-bold text-md"
              >
                Imagen principal
              </label>
              <div className="flex flex-col">
                <input
                  type="file"
                  accept="image/*"
                  // value={create.mainImage}
                  onChange={(e) =>
                    setCreate({ ...create, mainImage: e.target.files })
                  }
                  className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400 md:w-[196px]"
                />
                <button
                  type="button"
                  onClick={() => saveImages(create.mainImage, true)}
                  className="bg-blue-500 mt-2 py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right"
                >
                  Subir
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:mx-auto mb-4 w-full md:justify-around">
            <div className="flex flex-col">
              <label
                htmlFor="involucrados"
                className="text-green-500 font-bold text-md"
              >
                Involucrados
              </label>
              <input
                type="text"
                value={create.involved}
                onChange={(e) =>
                  setCreate({ ...create, involved: e.target.value })
                }
                className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="breve descripcion"
                className="text-green-500 font-bold text-md"
              >
                Breve descripción
              </label>
              <input
                type="text"
                value={create.description}
                onChange={(e) =>
                  setCreate({ ...create, description: e.target.value })
                }
                className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:mx-auto mb-4 w-full md:justify-around">
            <div className="flex flex-col">
              <label
                htmlFor="Fecha de creación"
                className="text-green-500 font-bold text-md"
              >
                Fecha de creación
              </label>
              <input
                type="date"
                value={create.date}
                onChange={(e) =>
                  setCreate({ ...create, date: e.target.value })
                }
                className="border-[1px] mb-4 md:mb-0 rounded-md px-2 py-1 border-neutral-400"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="flex flex-col">
              <label
                htmlFor="contenido"
                className="text-green-500 font-bold text-md"
              >
                Contenido del artículo
              </label>
              <input
                type="textarea"
                value={create.articleContent}
                onChange={(e) =>
                  setCreate({ ...create, articleContent: e.target.value })
                }
                className="border-[1px] rounded-md px-2 py-1 h-40 border-neutral-400 w-full"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 py-2 px-4 mx-auto rounded-md text-neutral-100 font-bold float-right"
          >
            Agregar
          </button>
        </div>
      </motion.div>
    </div>
  );
};
