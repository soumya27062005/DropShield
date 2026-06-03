import { useState } from "react";
import { Download, Play, FileText, Video, ArrowLeft, X, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DropShieldLogo } from "@/components/DropShieldLogo";

const StudyMaterials = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [previewItem, setPreviewItem] = useState(null); // stores current item for preview

  // Materials (make sure files exist in /public/materials/)
  const materials = [
    { id: 1, title: "Mathematics - Calculus", type: "pdf", subject: "math", downloads: 156, size: "2.4 MB", file: "/materials/calculus.pdf" },
    { id: 2, title: "Physics - Quantum Mechanics", type: "video", subject: "physics", downloads: 89, size: "45 MB", file: "/materials/Quantum.mp4" },
    { id: 3, title: "Chemistry - Organic Compounds", type: "pdf", subject: "chemistry", downloads: 203, size: "1.8 MB", file: "/materials/organic.pdf" },
    { id: 4, title: "English Literature - Poetry Analysis", type: "pdf", subject: "english", downloads: 134, size: "3.2 MB", file: "/materials/poetry.pdf" },
    { id: 5, title: "Computer Science - Data Structures", type: "video", subject: "cs", downloads: 267, size: "67 MB", file: "/materials/ds.mp4" },
  ];

  const subjects = [
    { id: "all", name: "All Subjects", color: "from-primary to-secondary" },
    { id: "math", name: "Mathematics", color: "from-blue-500 to-blue-600" },
    { id: "physics", name: "Physics", color: "from-green-500 to-green-600" },
    { id: "chemistry", name: "Chemistry", color: "from-purple-500 to-purple-600" },
    { id: "english", name: "English", color: "from-red-500 to-red-600" },
    { id: "cs", name: "Computer Science", color: "from-indigo-500 to-indigo-600" },
  ];

  const filteredMaterials =
    selectedSubject === "all"
      ? materials
      : materials.filter((m) => m.subject === selectedSubject);

  // Download handler
  const handleDownload = (file, title) => {
    if (!file) return;
    const link = document.createElement("a");
    link.href = file;
    link.download = `${title}.pdf`;
    link.click();
  };

  // Watch handler
  const handleWatch = (file) => {
    if (file) {
      setPreviewItem({ type: "video", file });
    }
  };

  // Preview handler (for both pdf & video)
  const handlePreview = (material) => {
    setPreviewItem(material);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-soft border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <DropShieldLogo size="md" />
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Study Materials
          </h1>
          <p className="text-muted-foreground">
            Access your coursework and learning resources
          </p>
        </div>

        {/* Subject Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => setSelectedSubject(subject.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedSubject === subject.id
                    ? `bg-gradient-to-r ${subject.color} text-white shadow-md`
                    : "bg-muted hover:bg-muted/80 text-muted-foreground"
                }`}
              >
                {subject.name}
              </button>
            ))}
          </div>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMaterials.map((material) => (
            <div
              key={material.id}
              className="card-gentle p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg">
                  {material.type === "pdf" ? (
                    <FileText className="text-primary" size={24} />
                  ) : (
                    <Video className="text-secondary" size={24} />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{material.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{material.downloads} downloads</span>
                    <span>{material.size}</span>
                  </div>
                  <div className="flex gap-2">
                    {material.type === "pdf" ? (
                      <button
                        onClick={() =>
                          handleDownload(material.file, material.title)
                        }
                        className="btn-primary flex items-center gap-2"
                      >
                        <Download size={16} />
                        Download
                      </button>
                    ) : (
                      <button
                        onClick={() => handleWatch(material.file)}
                        className="btn-primary flex items-center gap-2"
                      >
                        <Play size={16} />
                        Watch
                      </button>
                    )}

                    <button
                      onClick={() => handlePreview(material)}
                      className="btn-outline flex items-center gap-2"
                    >
                      <Eye size={16} />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Preview Modal */}
      {previewItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-4 max-w-4xl w-full relative">
            <button
              onClick={() => setPreviewItem(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="text-lg font-semibold mb-4">{previewItem.title}</h2>

            {previewItem.type === "pdf" ? (
              <iframe
                src={previewItem.file}
                title={previewItem.title}
                className="w-full h-[70vh] rounded-lg"
              />
            ) : (
              <video
                src={previewItem.file}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyMaterials;
