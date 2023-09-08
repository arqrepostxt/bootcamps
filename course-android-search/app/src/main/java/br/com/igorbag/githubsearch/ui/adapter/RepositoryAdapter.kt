package br.com.igorbag.githubsearch.ui.adapter

import android.content.res.Configuration
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.cardview.widget.CardView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import br.com.igorbag.githubsearch.R
import br.com.igorbag.githubsearch.domain.Repository

class RepositoryAdapter(private val repositories: List<Repository>) :
    RecyclerView.Adapter<RepositoryAdapter.ViewHolder>() {

    var repositoryItemClickListener: (Repository) -> Unit = {}
    var shareButtonClickListener: (Repository) -> Unit = {}

    // Cria uma nova view
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view =
            LayoutInflater.from(parent.context).inflate(R.layout.repository_item, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.repositoryItem.text = repositories[position].name

        holder.itemView.setOnClickListener {
            repositoryItemClickListener(repositories[position])
        }
        val isDarkThemeOn = holder.itemView.context.resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK == Configuration.UI_MODE_NIGHT_YES
        if (isDarkThemeOn) {
            holder.backgroundItem.setCardBackgroundColor(ContextCompat.getColor(holder.itemView.context, R.color.purple_700))
        } else {
            holder.backgroundItem.setCardBackgroundColor(ContextCompat.getColor(holder.itemView.context, R.color.gray))
        }

        holder.share.setOnClickListener {
            shareButtonClickListener(repositories[position])
        }
    }

    // Pega a quantidade de repositorios da lista
    override fun getItemCount(): Int = repositories.size

    class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val share: ImageView
        val repositoryItem : TextView
        val backgroundItem : CardView
        init {
            view.apply {
                share = findViewById(R.id.iv_share)
                repositoryItem = findViewById(R.id.tv_repository_name)
                backgroundItem = findViewById(R.id.cv_car)
            }
        }
    }
}


